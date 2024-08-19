// const express = require("express");

// const app = express();

// app.get("/api/transactions", (req, res) => {
//   const query = req.query;
//   console.log(query);

//   res.send("tama is gay");
// });

// /**
//  * const url = "https://stxtools.onrender.com/api/transactions?page=10"
//  *
//  * PROTOCOL- https://
//  * hostname/domainName- onreder.com
//  * subdomain - stxtools
//  * path- /api/transactions
//  * query- ?page=10
//  */

// https: app.listen("5000", "127.0.0.1", () => {
//   console.log("Listening at PORT 5000");
// });
// /**
//  * API REQUEST
//  * C R U D
//  *
//  * C - Create: POST Request
//  * R - Read: GET Request
//  * U - Update: PATCH/PUT Request
//  * D - Delete: DELETE Request
//  */

const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "indexlogin.html"));
});

app.get("/indexlogin.js", (req, res) => {
  res.sendFile(path.join(__dirname, "indexlogin.js"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "access.html"));
});

app.get("/user.html", (req, res) => {
  res.sendFile(path.join(__dirname, "user.html"));
});

app.get("/userreligion.html", (req, res) => {
  res.sendFile(path.join(__dirname, "userreligion.html"));
});

const users = [
  {
    username: "tama",
    password: "funds",
  },
  {
    username: "victor",
    password: "calabarman",
  },
  {
    username: "flourish",
    password: "fredrick",
  },
  {
    username: "chizy",
    password: "lenovo",
  },
];
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please fill up all fields" });
  }

  const user = users.find(
    (e) => e.username === username && e.password === password
  );

  console.log(user);

  res.status(200).json({ message: "Success" });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Invalid route" });
});

app.listen(PORT, () => {
  console.log(`Server listenwning at port: ${PORT}`);
});
