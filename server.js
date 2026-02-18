const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set("view engine", "ejs");

// ⚠️ Tumhare .ejs files abhi root me hain, isliye views folder ki jagah root set
app.set("views", path.join(__dirname));

// Static folders (agar css/js/images folders hain)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render("index"); // index.ejs
});

app.listen(PORT, () => console.log("Running on", PORT));
