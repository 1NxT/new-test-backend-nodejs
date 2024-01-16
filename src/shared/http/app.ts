import { errors } from 'celebrate';
import cors from 'cors';
import express, { json, NextFunction, Request, Response, urlencoded } from 'express';
import AppError from '@shared/errors/AppError';
import router from './routes/router';

var compression = require('compression');
function createServer() {
  const app = express();

  app.use(
    json({
      limit: '50mb',
    }),
  );

  app.use(urlencoded({ extended: true }));
  app.use(compression());
  app.use(cors());
  app.use(router);
  app.use(errors());
  //Tratamento de errors
  app.use(function (error: Error, _: Request, response: Response, __: NextFunction) {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({
          status: error.statusCode,
          message: error.message,
          adicional: error.adicional,
        })
        .end();
    }

    return response
      .status(500)
      .json({
        status: 500,
        message: 'Internal server error',
      })
      .end();
  });

  return app;
}

export default createServer;
