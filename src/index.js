"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    return res.send('Hello Word');
});
app.listen(3333);
