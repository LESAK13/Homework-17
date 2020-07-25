var db = require("../models/");
const router = require("express").Router();


router.get("/api/workouts/", function (req, res) {
  db.Workout.find({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

router.get("/api/workouts/range", function (req, res) {
  db.Workout.find({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});


router.post("/api/workouts/", function (req, res) {
  db.Workout.create({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;