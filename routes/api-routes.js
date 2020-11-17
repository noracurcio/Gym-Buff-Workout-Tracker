
const express = require('express')
const Workout = require('../models/workout')
const app = express()


//get last workout

    app.get("/api/workouts/", function({ body }, res){
        Workout.find()
        .then(dbWorkout => {
          res.json(dbWorkout)
        }).catch(err => {
          res.json(err)
        })
      })
    


//add exercise


app.put("/api/workouts/:id", function({ body, params }, res){
    Workout.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body}},
        {new:true, runValidators:true}
    )
    .then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err)
    })
  })

//create workout

app.post("/api/workouts", function({ body }, res){
    Workout.create({}).then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err)
    })
  })

//get workouts in range

app.get("/api/workouts/range", function({ body }, res){
    Workout.find({}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err)
    })
  })




module.exports = (app)

