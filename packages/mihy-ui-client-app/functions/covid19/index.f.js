
const functions = require("firebase-functions");
const firebase = require("../utils/firebase");
const app = require("../utils/express-instance");
// const app = require("../utils/authorized-express-instance");
// const errorHandler=require("../utils/middlewares/error-handler");
const { fA } = firebase;
const db = fA.database();
const covid19Ref = db.ref("covid19/dev");

//make dev to prod

const create=require("./create");
const search=require("./search");
const update=require("./update");
const remove=require("./delete");



//create routes
app.use("/",search({covid19Ref}));

//search route
app.use("/",create({covid19Ref}));

//update route
app.use("/",update({covid19Ref}));

//remove route
app.use("/",remove({covid19Ref}));


// app.use(errorHandler);

exports = module.exports = functions.https.onRequest(app);
