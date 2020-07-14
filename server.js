const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

var db = mongoose.connection;

if(!db)
  console.log("Error connecting to database")
  else
  console.log("Database connected")

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
