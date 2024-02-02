const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
    // console.log(file);
  },

  filename: function (req, file, cb) {
    console.log(file);
    let randomno = Math.floor(Math.random() * 100000);
    console.log(randomno);
    cb(null, randomno + "" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/oopl", upload.single("myfile"), (req, res) => {
  res.json({ msg: "file uploaded" });
});
app.listen(8000, () => {
  console.log("port is working  correctly");
});
