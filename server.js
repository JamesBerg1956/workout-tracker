// import express
const express = require("express");
// import mongoose
const mongoose = require("mongoose");
// import morgan
const logger = require("morgan");
// import path
const path = require("path");
// import models
const db = require("./models");

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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

// /stats html GET HTML route
app.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

// /exercise GET HTML route
app.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

// TODO: /exercise?id=objectID HTML route

// /api/workouts api GET route
app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
    .then(function(dbWorkouts){
        res.json(dbWorkouts);
    })
    .catch(function(err){
        res.json(err);
    });
});

// /api/workouts/range GET route
app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
    .then(function(dbWorkouts){
        res.json(dbWorkouts);
    })
    .catch(function(err){
        res.json(err);
    });
});

// TODO: /api/workouts/:id api PUT route

// /api/workouts api POST route
app.post("/api/workouts", function({body}, res){
    db.Workout.create(body)
    .then(function(dbWorkout){
        res.json(dbWorkout);
    })
    .catch(function(err){
        res.json(err);
    });
});

// set app object to listen on PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});