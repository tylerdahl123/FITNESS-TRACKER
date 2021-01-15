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
    app.put("/api/workouts/:id", ({ params }, res) => {
        db.Workout.updateOne(
          {
            _id: db.Workout(params.id)
          },
          {
            $set: {
              new: true
            }
          },
      
          (error, edited) => {
            if (error) {
              console.log(error);
              res.send(error);
            } else {
              console.log(edited);
              res.send(edited);
            }
          }
        );
      });
}