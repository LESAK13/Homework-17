var db = require("../models/");
const router = require("express").Router();

router.get("/api/workouts", function (req, res) {
  db.Workout.find({}).then(function (dbWorkouts) {
    res.json(dbWorkouts);
  });
});


module.exports = router;


