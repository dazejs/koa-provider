import { BaseProvider , MiddlewareService, provide } from '@dazejs/framework';
import { KoaMiddleware } from './middleware';
import Koa from 'koa';


export class KoaMiddlewareProvider extends BaseProvider {
  @provide()
  koa() {
    return new Koa();
  }

  launch() {
    this.app.get<MiddlewareService>('middleware').register(KoaMiddleware);
  }
}