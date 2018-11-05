import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import expressValidation from "express-validation";
import initializeDb from "./db";
import middleware from "./middleware";
import api from "./api";
import config from "./config.json";

//loading env property
require("dotenv").config();

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders
  })
);

//body parser
app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

// connect to db
initializeDb(db => {
  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use("/api", api({ config, db }));

  //error handling middleware
  app.use((err, req, res) => {
    console.log("error midddleware");
    if (err instanceof expressValidation.ValidationError) {
      res.status(err.status).json(err);
    } else {
      res.status(500).json({
        status: err.status,
        message: err.message
      });
    }
  });

  //port lisener
  app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
