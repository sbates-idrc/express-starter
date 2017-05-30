var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/jquery/dist"));

app.listen(3000);
