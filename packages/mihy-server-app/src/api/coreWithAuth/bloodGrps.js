import resource from "resource-router-middleware";
import squel from "squel";

export default ({ config, db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "model",
    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
      const query = {
        text: "SELECT * FROM mihy_blood_grps WHERE id=$1",
        values: [id]
      };

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
      const query = {
        text: "SELECT * FROM mihy_blood_grps"
      };

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
    create({ body }, res) {
      const query = {
        text: "INSERT INTO mihy_blood_grps(name) VALUES($1) RETURNING *",
        values: [body.name]
      };

      // callback
      db.query(query, (err, response) => {
        if (err) {
          return res
            .status(500)
            .send("There was a problem creating a record.");
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
    update({ model, body,userId }, res) {
      for (let key in body) {
        if (key !== "id") {
          model[0][key] = body[key];
        }
      }
      const query = {
        text: "UPDATE mihy_blood_grps SET name=$1,ud=$2,ub=$3 WHERE id=$4",
        values: [model[0].name,new Date().getTime(),model[0].userId,model[0].id]
      };

      // callback
      db.query(query, (err, response) => {
        if (err) {
          return res
            .status(500)
            .send("There was a problem deleting a record.");
        } else {
          res.sendStatus(204);
        }
      });
    },

    /** DELETE /:id - Delete a given entity */
    delete({ model }, res) {
      // models.splice(models.indexOf(model), 1);
      const query = {
        text: "DELETE FROM mihy_blood_grps WHERE id=$1",
        values: [model[0].id]
      };

      // callback
      db.query(query, (err, response) => {
        if (err) {
          return res
            .status(500)
            .send("There was a problem deleting a record.");
        } else {
          res.sendStatus(204);
        }
      });
    }
  });
