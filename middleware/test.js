const express = require("express");
                
const app = express();
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
     
    }
})
const upload = multer({storage: storage})
app.set ("view engine", "ejs");
app.get ("/upload", (req, res) => {
  res.render("upload");
});
app.post ("/upload", (req, res) => {
  res.send("Image Uploaded");
});
                                 