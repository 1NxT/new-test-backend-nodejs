import { Router } from 'express';
import product from './product/router/product.router';

const v1Router = Router();
v1Router.use('/product', product);
export default v1Router;
