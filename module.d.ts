declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_DB_URL: string,
    MONGO_DB_USER: string,
    MONGO_DB_PASS: string,
    MONGO_DB_DATA: string
  }
}
