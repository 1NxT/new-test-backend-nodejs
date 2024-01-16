import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import process from 'process';
const PORT: number = process.env.NODE_ENV == 'DEV' ? 6060 : 8080;
import swaggerUi from 'swagger-ui-express';
import createServer from './app';
import swaggerDocument from '../../../swagger.json';
const app = createServer();
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// App uses
app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}! Enviroment ${process.env.NODE_ENV}`);
});
