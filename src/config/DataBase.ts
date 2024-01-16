import { Pool, PoolClient, PoolConfig } from 'pg';
import fs from 'fs';
import config from './Config';
import { join } from 'path';
import AppError from '@shared/errors/AppError';

export default class DataBase {
  private readonly credentials: PoolConfig = {
    user: config.credentials.userdatabase,
    database: config.credentials.database,
    password: config.credentials.password,
    host: config.credentials.host,
    port: config.credentials.port,
    connectionTimeoutMillis: 2500,
    idleTimeoutMillis: 1000,
    ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync(join(__dirname, '../../keys/ca.pem'), { encoding: 'utf8' }),
    },
  };

  public async conectar(): Promise<PoolClient> {
    const pool = new Pool(this.credentials);
    const conn = await pool.connect().catch((e: any) => {
      console.log('erro', e);
      console.info(e);
      throw new AppError('Problema na conexão!', 402);
    });
    return conn;
  }
}
