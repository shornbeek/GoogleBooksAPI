require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app){
app.get("/api/books", (req, res) => {
  db.Book.find().then(
   (bookData) => {
       res.json({error: err});
   }

  ).catch(
    (err) => {
        res.json({error: err});
    }

    );   
  })
}