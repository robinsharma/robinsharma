var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var http = require("http");

var app = express();

app.get('/', function(request, response) {
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
    });

var port = process.envPORT || 8080;
http.createServer(app).listen(port, function() {
	console.log("Listen on " + port + "!");
    });