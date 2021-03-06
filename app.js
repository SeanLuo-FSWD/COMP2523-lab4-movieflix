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

app.get("/", (req, res) => {
  let movieList = ["Inception", "Spiderman", "The Dark Knight", "Tenet"];
  res.render("pages/index", { movieList: movieList });
});
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

const posts = [
  {
    postId: 5,
    userName: "john",
    createdAt: new Date(),
    message: "Hi there",
    comments: "4",
    likes: "2",
    commentList: [],
  },
  {
    postId: 4,
    userName: "john2",
    createdAt: new Date(),
    message: "this is a new post by me",
    comments: "4",
    likes: "2",
    commentList: [],
  },
  {
    postId: 3,
    userName: "josh",
    createdAt: new Date(),
    message: "Josh first post",
    comments: "2",
    likes: "3",
    commentList: [],
  },
];
