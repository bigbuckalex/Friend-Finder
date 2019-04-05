let express = require("express");
let app = express();
let path = require("path");

let PORT = process.env.PORT || 8080;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);