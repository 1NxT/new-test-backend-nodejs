declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: number;
    DATABASE_USERNAME: string;
    PASSWORD: string;
    DATABASE: string;
  }
}
