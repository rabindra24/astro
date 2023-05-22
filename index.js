const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:Askme%4012345@cluster0.b3ub8ba.mongodb.net/?retryWrites=true&w=majority"
);

const User = mongoose.model("Astro", {
  firstName: String,
  number: Number,
  password: String,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.post("/register", (req, res) => {
  console.log(req.body);

  const Users = new User(req.body);
  Users.save().then(() => console.log("meow"));
  res.send(Users);
});

app.post("/login", async (req, res) => {
  // const username = req.body.firstname;
  // const password = req.body.password;
  // User.find({ name: username, password: password }, (err, users) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(users);
  //   }
  // });
  console.log("rekdfk");
  await User.find()
    .then((users) => {
       console.log("users")
       res.send(users);
    })
    .catch((err) => {
      console.log("Error")

      console.log(err);
    });
});

app.listen(3000, (req, res) => {
  console.log("Server is started on 3000");
});
