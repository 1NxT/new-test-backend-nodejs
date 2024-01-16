import 'dotenv/config';

export default {
  credentials: {
    MONGO_DB_URL: process.env.MONGO_DB_URL.replace("<username>", process.env.MONGO_DB_USER).replace("<password>", process.env.MONGO_DB_PASS),
    MONGO_DB_USER: process.env.MONGO_DB_USER,
    MONGO_DB_PASS: process.env.MONGO_DB_PASS,
    MONGO_DB_DATA: process.env.MONGO_DB_DATA
  },
};
