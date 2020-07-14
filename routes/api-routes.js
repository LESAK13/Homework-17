var db = require("../models/");
const router = require("express").Router();


router.get("/api/workouts/", function (req, res) {
  db.Workout.find()
  .then(function (dbWorkout) {
    res.json(dbWorkout);
  });
  });


router.post("/api/workouts", function (req, res) {
  console.log(req.body)

  db.Workout.create({
    type: req.body.type,
    name: req.body.name,
    duration: req.body.duration,
    weight: req.body.weight,
    reps: req.body.reps,
    sets: req.body.sets
  }).then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});

router.put("/api/workouts/:id", function (req, res) {
  console.log(req.body)
});


module.exports = router;



