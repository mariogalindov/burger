var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      console.log("This is the burger model data into the controller");
      console.log(data);
      var hbsObject = {
        burger: data
      };
      // console.log(hbsObject);
      // res.render("index", hbsObject); No jala con el objeto hbsObject no sé si la sintaxis tenga que llevar los curly forzosamente si ya estaba definido como objeto en la var hbsObject
      res.render("index", {data});
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;