import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('/content')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post('/posts')
  createPost() {
    return this.postService.newPost();
  }
}