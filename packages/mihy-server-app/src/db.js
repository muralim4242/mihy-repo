import firebase from "./firebase";
const { Client } = require("pg");

export default callback => {
  const pg = new Client({
    connectionString:
      // process.env === "development"    ?
      process.env.DATABASE_URL_DEV,
    // : process.env.DATABASE_URL_PROD,
    ssl: true
  });

  pg.connect();

  callback({ pg, firebase });
};
