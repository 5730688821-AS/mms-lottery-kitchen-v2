// create an app.js file with the following contents
var express = require('express');
var cors = require('cors');
var bcrypt = require('bcrypt');
var app = express();

app.use(cors());

// Mongodb config
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://core_database:27017/core";

app.listen(3030, function(){
  console.log('Query services is running @port: 3030');
  console.log('OK!');
});

// Query API (Searchcourse)
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

// Check is username is already used?
app.get('/isValid', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var id = req.query.id;
    db.collection("users").find({ username : id}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      if (result.length > 0) {
        res.send(200, {"result": false, "msg": "user: " + id + " is already in used."})
      } else {
        res.send(200, {"result": true, "msg": "user: " + id + " is valid."})
      }
      db.close();
    });
  });
});

// Create an account
app.get('/createAccount', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var username = req.query.id;
    var password = req.query.pw;
    bcrypt.hash(password, 10, function (err, hash){
      if (err) {
        return res(err);
      }
      db.collection("users").find({ username : username }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
          res.send(200, {"result": false, "msg": "user: " + username + " is already in used."})
        } else {
          db.collection("users").insert({ username: username, password: hash, level: 99, status: "active" });               
          res.send(200, {"result": true, "msg": "user: " + username + " has been added."});
        }
      db.close();
      });
    });
  });
});

// Loging in (not implement cookie yet)
app.get('/login', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var username = req.query.id;
    var password = req.query.pw;
    db.collection("users").find({username : username}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      if (result.length == 1) {
        bcrypt.compare(password, result[0].password, function(err, correct) {
          if (correct) {
            res.send(200, {"result": true, "msg": "You are logged in."})
          } else {
            res.send(200, {"result": false, "msg": "username or password is incorrect."})
          }
        });
      } else {
        res.send(200, {"result": false, "msg": "username or password is incorrect."})
      }
      db.close();
    });
  });
});