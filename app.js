// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
let PORT = process.env.PORT || 3400;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    res.send("Hello!");
  });

  app.post("/api/tables", function(req, res) {

    var newReservation = req.body;

    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
    console.log(tables);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  
  //======= Variables ===============
  var tables=[];
  var waitingList = [];

