// import express
const express = require("express");
// import mongoose
const mongoose = require("mongoose");
// import morgan
const logger = require("morgan");

// create PORT to listen for
const PORT = process.env.PORT || 8080;

// create app object form express
const app = express();

// set app object to use morgan logger
app.use(logger("dev"));

// setup server middleware with app object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set app object to use public folder
app.use(express.static("public"));

// connect to mogodb database using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttracker", {useNewUrlParser: true});


// TODO: create routes


// set app object to listen on PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});