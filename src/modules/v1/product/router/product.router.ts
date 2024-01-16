import { Router } from 'express';
import ProductCtrl from '../controller/product.controller';

const productRouter = Router();
const productController = new ProductCtrl;
productRouter.post("/", productController.createProduct);

export default productRouter;
