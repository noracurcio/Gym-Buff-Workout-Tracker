const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", opts);



app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));






app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});