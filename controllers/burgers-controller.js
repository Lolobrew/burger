var express = require ("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require ("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect('/burgers');
});


router.get('/burgers', function(req, res){
  burger.all(function(burgerData){
    res.render('index', { burger_data: burgerData})
  });
});



router.post("/burgers/create", function(req, res) {
  console.log(req.burger_name);
  burger.create(req.body.burger_name, function(result){
      res.redirect('/');
      console.log(result);
    }); 
});

router.put('/burgers/update', function( req, res){
  burger.update(req.body.burger_id, function(result){
    res.redirect('/');
    console.log(result);
  });
});
/*router.put("/burgers/update", function(req, res){
  burger.update(res.body.id, function(result){
    res.redirect('/');
    console.log(result);
  });

});
/*router.put("/burgers", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});*/

// Export routes for server.js to use.
module.exports = router;