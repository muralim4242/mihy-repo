const functions = require("firebase-functions");
const firebase = require("../utils/firebase");
const app = require("../utils/express-instance");
// const app = require("../utils/authorized-express-instance");
// const errorHandler=require("../utils/middlewares/error-handler");
const { fA } = firebase;
const db = fA.firestore();

const create=require("./create");
const search=require("./search");
const update=require("./update");
const remove=require("./delete");



//create routes
app.use("/",search({db}));

//search route
app.use("/",create({db}));

//update route
app.use("/",update({db}));

//remove route
app.use("/",remove({db}));


// app.use(errorHandler);

exports = module.exports = functions.https.onRequest(app);
