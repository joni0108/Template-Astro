import "dotenv/config";

const ENV = {
  IS_PROD: import.meta.env.PROD,
  IS_DEV: import.meta.env.DEV,
  BASE_URL: import.meta.env.BASE_URL,
  SQL_DB_URI: process.env.SQL_DB_URI,
  SQL_DB_TOKEN: process.env.SQL_DB_TOKEN,
};

export default ENV;
