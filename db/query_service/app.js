// create an app.js file with the following contents
var express = require('express');
var app = express();

// Mongodb config
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://core_database:27017/core";

app.listen(3030, function(){
  console.log('Query services is running @port: 3030');
  console.log('OK!');
});

// Query API
app.get('/query', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var keywords = req.query.tags;
    var query_tags = keywords.split(" ");
    var query = { tags: { $all: query_tags } };
    db.collection("courses").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
  
});
