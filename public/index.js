init();

// START init function
async function init() {

  // if the url querysting contains does not contain '='
  if (location.search.split("=")[1] === undefined) {

    // get a json object of the most recent workout
    const workout = await API.getLastWorkout();

    // START if getLastWorkout() returned a json object
    if (workout) {
      // append ?id=objectId to current url querystring
      location.search = "?id=" + workout._id;
    }
    // END if getLastWorkout() returned a json object 
    // START else getLastWorkout() did not return a json object
    else {
      // hide the Continue Workout button
      document.querySelector("#continue-btn").classList.add("d-none")
    }
    // END else getLastWorkout() did not return a json object

  }
}
// END init function
