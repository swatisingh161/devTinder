const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User(req.body);
  //   const user = new User({
  //     firstName: "sachin",
  //     lastName: "tendulkar",
  //     emailId: "sachin@gmail.com",
  //     password: "sachin23",
  //   });
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
