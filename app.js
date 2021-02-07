/*
 Authors:
 Your name and student #: Sean Luo - A00964873
 Your Partner's Name and student #: N/A
 (Make sure you also specify on the Google Doc)
*/
const express = require("express");
const fs = require("fs");

let app = express();
let movieList = ["Inception", "Spiderman", "The Dark Knight", "Tenet"];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", { movieList: movieList });
});

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
  // Add your implementation here
  const mList = req.body.movies.split(",");
  movieList = mList;
  res.redirect(302, "/");
});

app.get("/myListQueryString", (req, res) => {
  // Add your implementation here
  queryList = [];
  for (x in req.query) {
    queryList.push(req.query[x]);
  }
  movieList = queryList;
  res.redirect(302, "/");
});

app.get("/search/:movieName", (req, res) => {
  // Add your implementation here
  const term = req.params.movieName;
  let line;
  fs.readFile("./movieDescriptions.txt", "utf8", (err, file) => {
    if (err) {
      throw err;
    } else {
      var lineArray = file.split("\n");

      for (l of lineArray) {
        if (l.startsWith(term.charAt(0).toUpperCase() + term.slice(1))) {
          line = l.split(":").pop();
          break;
        }
      }
      if (line) {
        res.render("pages/searchResult", { term: term, line: line });
      } else {
        res.render("pages/searchResult", {
          term: null,
          line: "movie could not be found",
        });
      }
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
