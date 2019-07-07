// const db = require("./DBconnection");
// const queries = require("./queries");
const express = require("express");
const app = express();
const port = 3001;
const { Client } = require("pg");

const connection = new Client({
  connectionString: process.env.HEROKU_POSTGRESQL_PINK_URL,
  ssl: true
});

connection.connect(err => {
  console.log(process.env.HEROKU_POSTGRESQL_PINK_URL);
  //   console.log(process.env);
  if (err) {
    return err;
  }
});

app.get("/", (req, res) => {
  connection.query("SELECT skill_name FROM public.skills", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.json({ data: results });
    }
  });
});

app.get("/test", (req, res) => {
  res.send(console.log(process.env.HEROKU_POSTGRESQL_PINK_URL));
});

app.listen(port, () => {
  console.log("Listening to port: " + port);
});

// //Server-side filtered data based on parameters /:column/:data sent by client request.
// app.get("/inventory/api/getInventorySearch/:filter/:search", (req, res) => {
//   db(queries.q_inventorySearch(req.params.filter, req.params.search)).then(
//     dbResults => {
//       res.send(dbResults);
//     }
//   );
// });

// app.get("/inventory/api/getInventoryID/:id", (req, res) => {
//   db(queries.q_inventoryID(req.params.id)).then(dbResults => {
//     res.send(dbResults);
//   });
// });
// app.get("/projects/api/getProjects/", (req, res) => {
//   db(queries.q_projects()).then(dbResults => {
//     res.send(dbResults);
//     //console.log(queries());
//   });
// });

// app.get("/history/api/getHistory/", (req, res) => {
//   db(queries.q_history()).then(dbResults => {
//     res.send(dbResults);
//     //console.log(queries());
//   });
// });
