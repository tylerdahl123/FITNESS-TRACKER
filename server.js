const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var router = express.Router();//need to ask about the router thing...and the require thing
const PORT = process.env.PORT || 3000;



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
const db = require("./models/");
//got help from google on this...why is this require route differnt from the others?
require("./routes/HTMLroutes")(app);
require("./routes/APIroutes")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  