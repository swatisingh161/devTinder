const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:wO8s6JD2eKJmPrB6@namastenode.f4prl.mongodb.net/devTinder?retryWrites=true&w=majority&appName=NamasteNode"
  );
};

module.exports = connectDB;
