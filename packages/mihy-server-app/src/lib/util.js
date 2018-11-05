// import jwt from "jsonwebtoken";
// import config from "../config.json";
import { fA } from "../firebase";
/**	Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *		list(req, res) {
 *			collection.find({}, toRes(res));
 *		}
 */
export function toRes(res, status = 200) {
  return (err, thing) => {
    if (err) return res.status(500).send(err);

    if (thing && typeof thing.toObject === "function") {
      thing = thing.toObject();
    }
    res.status(status).json(thing);
  };
}

export function verifyToken(req, res, next) {
  console.log(req);
  console.log(req.originalUrl);
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  fA
    .auth()
    .verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      req.uid = uid;
      next();
    })
    .catch(function(error) {
      // Handle error
      return res.status(500).send({ auth: false, error });
    });
}
