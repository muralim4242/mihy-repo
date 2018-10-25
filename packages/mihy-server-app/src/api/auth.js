import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import omit from "lodash/omit";
// const User = require("../models").User;

export default ({ config, db }) => {
  let api = Router();

  // perhaps expose some API metadata at the root
  api.post("/register", (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const query = {
      text:
        "INSERT INTO mihy_users(name, email,password) VALUES($1, $2,$3) RETURNING *",
      values: [req.body.name, req.body.email, hashedPassword]
    };

    // callback
    db.query(query, (err, response) => {
      if (err) {
        return res
          .status(500)
          .send("There was a problem registering the user.");
      } else {
        const { id } = response.rows[0];
        var token = jwt.sign({ id }, config.secret, {
          expiresIn: config.expiresIn // expires in 24 hours
        });
        const userDetails = omit(response.rows[0], ["password"]);
        res.status(200).send({ auth: true, token: token, ...userDetails });
      }
    });
  });

  api.post("/login", (req, res)=> {
    const query = {
      text: "SELECT * FROM mihy_users WHERE email = $1",
      values: [req.body.email]
    };

    // callback
    db.query(query, (err, response) => {
      if (err) {
        return res.status(500).send("Error on the server.");
      } else {
        if (!response.rows || response.rows.length === 0)
          return res.status(404).send("No user found.");
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          response.rows[0].password
        );
        if (!passwordIsValid)
          return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: response.rows[0].id }, config.secret, {
          expiresIn: config.expiresIn // expires in 24 hours
        });
        const userDetails = omit(response.rows[0], ["password"]);
        res.status(200).send({ auth: true, token: token, ...userDetails });
      }
    });
  });

  return api;
};
