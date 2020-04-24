
// START initWorkout function
async function initWorkout() {

  // get a json of the last workout object
  const lastWorkout = await API.getLastWorkout();

  console.log("Last workout:", lastWorkout);

  // START if last workout exists
  if (lastWorkout) {
    
    // for the #continue-btn anchor tag ...
    document.querySelector("a[href='/exercise?']")
      // update the href to include the id of the last workout
      .setAttribute("href", `/exercise?id=${lastWorkout._id}`);

    // START create a workoutSummary object
    const workoutSummary = {
      // date key : day of lastWorkout
      date: formatDate(lastWorkout.day),
      // totalDuration key : totalDuration of lastWorkout
      totalDuration: lastWorkout.totalDuration,
      // numExerises key : length of exercises array in lastWorkout
      numExercises: lastWorkout.exercises.length,
      // call tallyExercises function for each item in exercises array
      ...tallyExercises(lastWorkout.exercises)
    };
    // END create a workoutSummary object

    // call renderWorkoutSummary with workoutSummary object as parameter
    renderWorkoutSummary(workoutSummary);

  }
  // END if last workout exists 
  // START else last workout does not exist
  else {
    // call renderNoWorkoutText function
    renderNoWorkoutText()
  }
  // END else last workout does not exist
}
// END initWorkout function

// START tallyExercises function
function tallyExercises(exercises) {

  // START create an object that totals the stats in each exercise object
  const tallied = exercises.reduce((acc, curr) => {
    
    // START if current exercise type is 'resistance'
    if (curr.type === "resistance") {
      // accumulated total weight += current weight
      acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
      // accumulated total sets += current set
      acc.totalSets = (acc.totalSets || 0) + curr.sets;
      // accumulated total reps += current reps
      acc.totalReps = (acc.totalReps || 0) + curr.reps;
    } 
    // END if current exercise type is 'resistance'
    // START else if current exercise type is 'cardio'
    else if (curr.type === "cardio") {
      acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
    }
    // END else if current exercise type is 'cardio'

    // return accumulated stats object
    return acc;

  }, {});
  // END create an object that totals the stats in each exercise object

  // returned tallied exercises object
  return tallied;

}
// END tallyExercises function

// START formatDate function
function formatDate(date) {

  // START create options object that defines data types for parts of date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  // END create options object that defines data types for parts of date

  // return formatted date
  return new Date(date).toLocaleDateString(options);

}
// END formatDate function

// START renderWorkoutSummary function
function renderWorkoutSummary(summary) {

  // create var from .workout-stats div
  const container = document.querySelector(".workout-stats");

  // START create an object that defines key value pairs for summary object
  const workoutKeyMap = {
    date: "Date",
    totalDuration: "Total Workout Duration",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered"
  };
  // END create an object that defines key value pairs for summary object

  // START for each key in summary object
  Object.keys(summary).forEach(key => {

    // create a p tag
    const p = document.createElement("p");

    // create a strong tag, which will represent a label
    const strong = document.createElement("strong");

    // add the associated header text to the strong tag from workOutKeyMap
    strong.textContent = workoutKeyMap[key];

    // create a textNode object, contains the summary value of current key
    const textNode = document.createTextNode(`: ${summary[key]}`);

    // append the strong label to p tag
    p.appendChild(strong);
    // append the summary value to p tag
    p.appendChild(textNode);

    // append p tag to .workout-stats div
    container.appendChild(p);

  });
  // END for each key in summary object

}
// END renderWorkoutSummary function


// START renderNoWorkoutText function
function renderNoWorkoutText() {

  // create var from .workout-stats div
  const container = document.querySelector(".workout-stats");

  // create a p tag
  const p = document.createElement("p");
  // create a strong tag
  const strong = document.createElement("strong");

  // add some text to the strong tag
  strong.textContent = "You have not created a workout yet!"

  // append the strong tag to the p tag
  p.appendChild(strong);

  // append the p tag to the container
  container.appendChild(p);
  
}
// END renderNoWorkoutText function

initWorkout();
