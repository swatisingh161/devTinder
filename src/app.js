const express = require("express");

const app = express();

// const { adminAuth, userAuth } = require("./middlewares/auth");

// app.use("/admin", adminAuth);
// // app.use("/user", userAuth);

// app.get("/user/login", (req, res) => {
//   res.send("User Logged In!");
// });

// app.get("/user/data", userAuth, (req, res) => {
//   res.send("User Data Sent!");
// });

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data Sent!");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted a user");
// });

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("Something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  //   try {
  // Logic of DB call and get user data
  throw new Error("Error in fetching user data");
  res.send("User Data Sent!");
  //   } catch (err) {
  //     res.status(500).send("Something went wrong");
  //   }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("Something went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 3000");
});
