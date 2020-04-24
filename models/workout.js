// import mongoose
const mongoose = require("mongoose");

// create Schema object from mongoose
const Schema = mongoose.Schema;

// create WorkoutSchema
const WorkoutSchema = new Schema({
    // define day
    day: {
        type: Date,
        default: Date.now
    },
      
    // define exercises array
    exercises: [
        {
            type: {
                type: String,
                // TODO: enum: resistance, cardio
            },
            name: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]

})
    

// create Workout object with mongoose and WorkoutSchema
const Workout = mongoose.model("Workout", WorkoutSchema);

// export module
module.exports = Workout;