
import { BaseMiddleware, Response } from '@dazejs/framework';
import Koa from 'koa';
import compose from 'koa-compose';

export class KoaMiddleware extends BaseMiddleware {

  koa: Koa;

  constructor() {
    super();
    this.koa = this.app.get<Koa>('koa');
    this.koa.context.respond = false;
  }

  async resolve(request: any, next: any) {
    const fn = compose(this.koa.middleware);
    const ctx = this.koa.createContext(request.req, request.res);
    await fn(ctx);
    request.ctx = ctx;
    const response: Response = await next();
    response.setData(ctx.response.body);
    response.setHeaders(ctx.response.headers);
    return response;
  }
}