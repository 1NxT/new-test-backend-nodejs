import config from './Config';
import AppError from '@shared/errors/AppError';
import { MongoClient, ServerApiVersion } from 'mongodb';

export default class DataBase {
  private readonly uri: string = config.credentials.MONGO_DB_URL;
  private readonly client: MongoClient;

  constructor() {
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  }

  public async getCollection(collection: string) {
    const myDb = this.client.db(config.credentials.MONGO_DB_DATA);
    const myCol = myDb.collection(collection);
    return myCol;
  }

  public async close() {
    this.client.close();
  }
}
