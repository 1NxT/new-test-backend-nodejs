import 'dotenv/config';

export default {
  credentials: {
    userdatabase: process.env.DATABASE_USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  },
};
