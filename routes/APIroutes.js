//set it up like the html routes i assume

var path = require("path");
//i need to bring the db over to this
const db = require("../models");



module.exports = function (app){
    app.get("/api/workouts", function(req,res) {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
    });
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(data => res.json(data))
        .catch(err=>{
            res.json(err)
        })
    });
    //got this code from the nosql activities. 
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercise: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err)
        })
         
      });
}