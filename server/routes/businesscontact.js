/*
  File Name: businesscontact.js
  Author Name: Sravan Kumar Konudula
  Student Id: 301237930
  Web App Name: Express portfolio - JWT
*/
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");

let passport = require("passport");

let businesscontactController = require("../controllers/businesscontact");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the businesscontact List page - READ Operation */
router.get("/", businesscontactController.displayBusinessContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, businesscontactController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, businesscontactController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", requireAuth, businesscontactController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", requireAuth, businesscontactController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, businesscontactController.deletepage);

module.exports = router;
