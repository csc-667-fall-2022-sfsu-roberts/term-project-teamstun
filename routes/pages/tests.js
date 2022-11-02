const express = require("express");
const router = express.Router();
const db = require("../../db");

// router.get("/", (request, response) => {
//   db.any(
//     `INSERT INTO "Users" ("username", "password", "email") VALUES ('briget', '1234', 'bbso@gmail.com')`
//   )
//     .then((_) => db.any(`SELECT * FROM "Users"`))
//     .then((results) => response.json(results))
//     .catch((error) => {
//       console.log(error);
//       response.json({ error });
//     });
// });

router.get("/", (request, response) => {
  db.any(
    `INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`
  )
    .then((_) => db.any(`SELECT * FROM test_table`))
    .then((results) => response.json(results))
    .catch((error) => {
      console.log(error);
      response.json({ error });
    });
});

module.exports = router;