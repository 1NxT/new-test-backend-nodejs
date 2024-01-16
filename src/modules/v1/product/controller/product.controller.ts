import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import CreateProductSrvc from "../services/Create.product";
export default class ProductCtrl {
  async createProduct(request: Request, response: Response) {
    try {
      const body = request.body;
      const product = {
        title: body.title,
        description: body.description,
        price: body.price,
        category: body.category,
        owner: body.owner
      };
      const CreateProduct = new CreateProductSrvc;
      const data = await CreateProduct.create(product);

      return response
        .status(data.status)
        .header("Location", data.Location)
        .json(data.data).end();
    } catch (e: unknown) {
      if (e instanceof AppError) throw new AppError(e.message, e.statusCode);

      throw new AppError("Internal Server Error!", 500)
    }
  }
}
