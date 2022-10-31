/*
  File Name: businesscontact.js
  Author Name: Sravan Kumar Konudula
  Student Id: 301237930
  Web App Name: Express portfolio - JWT
*/
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let businessContactModel = mongoose.Schema(
  {
    contactName: String,
    contactNumber: String,
    emailAddress: String
  },

  {
    collection: "businesscontacts",
  }
);

module.exports = mongoose.model("BusinessContact", businessContactModel);
