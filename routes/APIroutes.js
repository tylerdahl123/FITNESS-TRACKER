//set it up like the html routes i assume

var path = require("path");
//i need to bring the db over to this
const db = require("./models");



module.exports = function (app){
app.get("/workouts", (req,res) => {
    db.Workout.find({})
})
}