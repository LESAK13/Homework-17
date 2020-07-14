var db = require("../models/");
const { mongo } = require("mongoose");
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
  db.Workout.update(
    {
      _id: (req.params.id)
    },
    {
      $set: {
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
        duration: req.body.duration
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;



