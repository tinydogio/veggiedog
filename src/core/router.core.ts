import * as express from 'express';

export class Router {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.register();
  }

  public register(): void {
    console.warn('Router has been created but register method has not been overwritten.');
  }
}
