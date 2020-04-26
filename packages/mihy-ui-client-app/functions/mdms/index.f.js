const functions = require("firebase-functions");
const firebase = require("../utils/firebase");//req
const app = require("../utils/express-instance");
// const app = require("../utils/authorized-express-instance");
// const errorHandler=require("../utils/middlewares/error-handler");
const { fA } = firebase;
const db = fA.database();
const mdmsRef = db.ref("admin/mdms");

const create=require("./create");
const search=require("./search");
const update=require("./update");
const remove=require("./delete");



//create routes
app.use("/",search({mdmsRef}));

//search route
app.use("/",create({mdmsRef}));

//update route
app.use("/",update({mdmsRef}));

//remove route
app.use("/",remove({mdmsRef}));


// app.use(errorHandler);

exports = module.exports = functions.https.onRequest(app);
