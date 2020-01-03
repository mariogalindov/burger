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
        burgers: data
      };
      // console.log(hbsObject);
      // res.render("index", hbsObject); No jala con el objeto hbsObject no sé si la sintaxis tenga que llevar los curly forzosamente si ya estaba definido como objeto en la var hbsObject
      res.render("index", {data}); //{data}
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log("This is the req.body inside te put method of the controller")
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        console.log("This is devoured in the burger_controller");
        console.log(devoured);
        console.log("You changed nothing");
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });



module.exports = router;