const express = require("express");
const dbconnect = require("./config/dbconnect")
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');



dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World");
});

dbconnect();
app.use(cors());
app.use(express.json());
const doctorRoute = require("./Api/Routes/doctor.route");

app.use("/api/doctor", doctorRoute);
app.use('/api/specs', require('./Api/Routes/spec.route'));
app.use('/api/doc-spec', require('./Api/Routes/docspec.route'));
app.use('/api/surgery', require('./Api/Routes/surgery.route'));


try {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (err) {
  console.log("Error starting server: ", err);
}
