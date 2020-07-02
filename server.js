const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//API
const user = require("./backend/routers/user.router");

app.use("/api/user/", user);

//DATABASE CONNECTION
const MONGODB_URL =
  "mongodb+srv://djdalino:TpW5Z6aYjCENviOt@cluster3-hngry.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  MONGODB_URL || process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to the database!");
  }
);

//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
if (process.env.NODE_ENV === "production") {
  const root = require("path").join(__dirname, "/frontend/build");

  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
}
