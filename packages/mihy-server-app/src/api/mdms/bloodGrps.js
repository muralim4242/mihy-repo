import resource from "resource-router-middleware";
const squel = require("squel").useFlavour("postgres");

export default ({ config, db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "model",
    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
      const query = squel
        .select()
        .from("mihy_blood_grps")
        .where("id = ?", id)
        .order("name")
        .limit(config.resultLimit)
        .toParam();

      // callback
      db.query(query, (err, response) => {
        if (err) {
          callback(err, []);
        } else {
          err = response.rows.length ? null : "Not found";
          callback(err, response.rows);
        }
      });
    },

    /** GET / - List all entities */
    index({ params }, res) {
      const query = squel
        .select()
        .from("mihy_blood_grps")
        .order("name")
        .limit(config.resultLimit)
        .toParam();

      // callback
      db.query(query, (err, response) => {
        if (err) {
          return res.status(500).send("Error on the server.");
        } else {
          res.json(response.rows);
        }
      });
    },

    /** POST / - Create a new entity */
    create({ body, userId }, res) {
      const query = squel
        .insert()
        .into("mihy_blood_grps")
        .setFieldsRows(
          body.map(body => {
            return { ...body, cb: userId };
          })
        )
        .toParam();

      // callback
      db.query(query, (err, response) => {
        if (err) {
          return res.status(500).send("There was a problem creating a record.");
        } else {
          res.json(response.rows[0]);
        }
      });
    },

    /** GET /:id - Return a given entity */
    read({ model }, res) {
      res.json(model);
    },

    /** PUT /:id - Update a given entity */
    update({ model, body, userId }, res) {
      for (let key in body) {
        if (key !== "id") {
          model[0][key] = body[key];
        }
      }
      const query = squel
        .update()
        .table("mihy_blood_grps")
        .setFields({
          name: model[0].name,
          ud: "NOW()",
          ub: userId
        })
        .where("id = ?", model[0].id)
        .toParam();

      // callback
      db.query(query, err => {
        if (err) {
          console.log(err.stack);
          return res.status(500).send("There was a problem updating a record.");
          // next(err)
        } else {
          res.sendStatus(204);
        }
      });
    },

    /** DELETE /:id - Delete a given entity */
    delete({ model }, res) {
      // models.splice(models.indexOf(model), 1);
      const query = squel
        .delete()
        .from("mihy_blood_grps")
        .where("id = ?", model[0].id)
        .toParam();

      // callback
      db.query(query, err => {
        if (err) {
          return res.status(500).send("There was a problem deleting a record.");
        } else {
          res.sendStatus(204);
        }
      });
    }
  });
