// Dependencies
//--------------------------------------------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Configuration
//--------------------------------------------------------------------------------------------------
    // Tells node that we are creating an "express" server
var app = express();

    // Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

    // Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"/app/public")));

// Router
//--------------------------------------------------------------------------------------------------
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
//--------------------------------------------------------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
