const express = require("express");

const apiRoutes = require("./api/apiRoutes");

const isAuthMiddleware = require("./middlewares/isAuth");

const port = 3000;
const app = express();

app.use(express.json());

app.set("view engine", "ejs");

// app.use("/api", apiRoutes);
const page = "about";
const userName = "Tekle";

app.get("/", (req, res) => {
  const list = [1, 2, 3, 4, 5, 6, 7];
  res.render("pages/home", {
    data: {
      page,
      userName,
    },
    list,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { data: { userName } });
});

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
