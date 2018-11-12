const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')();
const config = require("./config.json");

let app = express();

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


////cookies parser
app.use(cookieParser);



module.exports=app;
