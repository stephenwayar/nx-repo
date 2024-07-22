import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Inject, OnModuleInit, forwardRef } from '@nestjs/common';
import { IoService } from './io.service';

@WebSocketGateway({
  namespace: '/io', // Namespace for notifications
  cors: {
    origin: '*', // Allow all origins for simplicity, adjust as needed
  },
})
export class IoGateway implements OnModuleInit {
  constructor(
    @Inject(forwardRef(() => IoService))
    private readonly ioService: IoService,
  ) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connect', (socket) => {
      console.log('Connected', socket.id)

      socket.on('getNotifications', (data) => {
        this.server.emit('notifications', this.ioService.getNotifications(data.userId))
      })

      socket.on('disconnect', () => {
        console.log('Disconnected', socket.id);
      });
    })
  }

  emitNotification(data: { message: string }) {
    this.server.emit('newNotification', data);
  }
}