import DataBase from "@config/DataBase";
import AppError from "@shared/errors/AppError";

type TProduct = {
  title: string,
  description: string,
  price: string,
  category: string,
  owner: string
}

interface IData {
  message: string
}

export default class CreateProductSrvc {
  private readonly db: DataBase;
  constructor() {
    this.db = new DataBase;
  }

  public async create(product: TProduct): Promise<{
    status: number,
    data: IData,
    Location: string
  }> {
    const collection = await this.db.getCollection("products");
    try {
      const result = await collection.insertOne(product);
      if (!result.acknowledged) {
        throw new AppError("Can not create the product!", 500);
      }

      return {
        status: 201,
        data: {
          message: "Product created!",
        },
        Location: `/products/${result.insertedId}`
      }
    } catch (e: unknown) {
      if (e instanceof AppError) throw new AppError(e.message, e.statusCode);

      throw new AppError("Internal Server Error!", 500)
    } finally {
      await this.db.close();
    }
  }
}
