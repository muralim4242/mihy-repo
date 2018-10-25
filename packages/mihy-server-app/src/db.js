// import Sequelize from "sequelize";
const { Client } = require("pg");

export default callback => {
  // connect to a database if needed, then pass it to `callback`:
  // const sequelize = new Sequelize(process.env==="development"?process.env.DATABASE_URL_DEV:process.env.DATABASE_URL_PROD, {
  //   dialect: "postgres",
  //   protocol: "postgres",
  //   dialectOptions: {
  //     ssl: true
  //   }
  // });
  //
  // sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log("Connection has been established successfully.");
  //   })
  //   .catch(err => {
  //     console.error("Unable to connect to the database:", err);
  //   });
  const db = new Client({
    connectionString:
      // process.env === "development"    ?
      process.env.DATABASE_URL_DEV,
        // : process.env.DATABASE_URL_PROD,
    ssl: true
  });

  db.connect();

  // db.query("SELECT NOW()", (err, res) => {
  //   console.log(err, res);
  //   db.end();
  // });
  // callback(sequelize);
  callback(db);
};
