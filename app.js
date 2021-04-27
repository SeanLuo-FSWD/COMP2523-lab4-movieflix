const posts = require("./FakeDb/posts");
const express = require("express");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.set("view engine", "ejs");

////////////////////////
app.get("/ts/posts", (req, res) => {
  res.status(200).json(posts);
});

// app.post("/myForm", (req, res) => {
//   const mList = req.body.movies.split(",");
//   movieList = mList;
//   res.redirect(302, "/");
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080 🚀");
});
