const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


recordRoutes.route("/record/NFT").get(function (req, res) {
  let db_connect = dbo.getDb("processed_nft_data");

  db_connect
    .collection("for_demo")
    .find({}).sort({"timestamp": 1})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/record/:coll/:score/:limit").get(function (req, res) {

  let db_connect = dbo.getDb("processed_data");
  const mysort = JSON.parse('{"'+req.params.score+'":-1}');
  console.log(mysort);
  db_connect
    .collection(req.params.coll)
    .find({}).sort(mysort).limit(parseInt(req.params.limit))
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = recordRoutes;
