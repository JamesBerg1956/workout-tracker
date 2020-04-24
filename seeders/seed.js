let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Back Squat",
        duration: 20,
        weight: 195,
        reps: 5,
        sets: 5
      },
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 165,
        reps: 5,
        sets: 5
      },
      {
        type: "resistance",
        name: "Medicine Ball Slamm",
        duration: 10,
        weight: 35,
        reps: 6,
        sets: 8
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Deadlift",
        duration: 20,
        weight: 285,
        reps: 5,
        sets: 3
      },
      {
        type: "resistance",
        name: "Overhead Press",
        duration: 20,
        weight: 85,
        reps: 5,
        sets: 5
      },
      {
        type: "resistance",
        name: "Jump Squats",
        duration: 10,
        weight: 25,
        reps: 6,
        sets: 8
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Pullup",
        duration: 10,
        weight: 175,
        reps: 5,
        sets: 5
      },
      {
        type: "resistance",
        name: "Dip",
        duration: 10,
        weight: 175,
        reps: 5,
        sets: 5
      },
      {
        type: "resistance",
        name: "Turkish Getup",
        duration: 10,
        weight: 45,
        reps: 3,
        sets: 2
      },
      {
        type: "resistance",
        name: "Kettlebell Swing",
        duration: 10,
        weight: 35,
        reps: 14,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bent over row",
        duration: 20,
        weight: 135,
        reps: 5,
        sets: 5
      },
      {
        type: "resistance",
        name: "Hip Adduction",
        duration: 10,
        weight: 235,
        reps: 10,
        sets: 3
      },
      {
        type: "resistance",
        name: "Turkish Getup",
        duration: 10,
        weight: 45,
        reps: 3,
        sets: 2
      },
      {
        type: "resistance",
        name: "Kettlebell Swing",
        duration: 10,
        weight: 35,
        reps: 14,
        sets: 3
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
