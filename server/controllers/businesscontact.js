let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");

//create reference to the model (dbschema )
let BusinessContact = require("../models/businesscontact");

module.exports.displayBusinessContactList = (req, res, next) => {
  BusinessContact.find((err, businessContactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(businessContactList);

      res.render("businesscontact/list", {
        title: "BusinessContacts",
        BusinessContactList: businessContactList,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("businesscontact/add", {
    title: "Add Business Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  debugger
  let newBusinessContact = BusinessContact({
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });
  console.log(newBusinessContact);
  BusinessContact.create(newBusinessContact, (err, BusinessContact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the BusinessContact list
      res.redirect("/business-contacts-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  BusinessContact.findById(id, (err, businesscontacttoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("businesscontact/edit", {
        title: "Edit Business Contact",
        businesscontact: businesscontacttoedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatebusinesscontact = BusinessContact({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });
  BusinessContact.updateOne({ _id: id }, updatebusinesscontact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the businesscontact list
      res.redirect("/business-contacts-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  BusinessContact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh BusinessContact list
      res.redirect("/business-contacts-list");
    }
  });
};
