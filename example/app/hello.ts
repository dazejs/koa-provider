import { BaseController, controller, http } from '@dazejs/framework';

@controller()
export class Hello extends BaseController {
  @http.get()
  index() {
    return 111;
  }
}