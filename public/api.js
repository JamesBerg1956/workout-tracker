const API = {

  // START getLastWorkout method
  async getLastWorkout() {

    // declare var for response
    let res;

    // START try/catch block for GET /api/workouts
    try {

      // get all objects in workouts collection
      res = await fetch("/api/workouts");

    // error catch
    } catch (err) {
      console.log(err)
    }
    // END try/catch block for GET /api/workouts

    // convert response objects to json format
    const json = await res.json();

    // return the most topmost object in the json
    return json[json.length - 1];

  },
  // END getLastWorkout method

  // START addExercise method
  async addExercise(data) {

    // find the id in url querysting where ?id=objectId
    const id = location.search.split("=")[1];

    // START trigger the /api/workouts/:id route and create response object
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // supply data parameter to body of PUT
      body: JSON.stringify(data)
    });
    // END trigger the /api/workouts/:id route and create response object

    // convert response object to json format
    const json = await res.json();

    // return json object
    return json;

  },
  // END addExercise method

  // START createWorkout method
  async createWorkout(data = {}) {

    // START triger /api/workouts route and create response oject
    const res = await fetch("/api/workouts", {
      method: "POST",
      // supply data parameter to body of POST
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    // END triger /api/workouts route and create response oject

    // convert response object to json format
    const json = await res.json();

    // return json object
    return json;

  },
  // END createWorkout method

  // START getWorkoutsInRange method
  async getWorkoutsInRange() {

    // trigger /api/workouts/range route and create a response object
    const res = await fetch(`/api/workouts/range`);

    // convert response object to json format
    const json = await res.json();

    // return json object
    return json;
    
  },
  // END getWorkoutsInRange method

};
