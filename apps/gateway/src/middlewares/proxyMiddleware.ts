import * as express from 'express';
import axios from 'axios';

export function proxyMiddleware(target: string) {
  return express.Router().all('*', async (req, res) => {
    const { url } = req;
    const targetUrl = target + url;

    try {
      const response = await axios({
        method: req.method as any,
        url: targetUrl,
        headers: req.headers,
        data: req.body,
      });

      res.status(response.status).send(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
}