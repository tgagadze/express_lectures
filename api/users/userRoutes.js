const { Router } = require("express");

const userRoutes = Router();

let users = [{ id: 1, name: "Tekle", age: 28 }];

// /api/users/
userRoutes.get("/", (req, res) => {
  res.json({ success: true, data: users });
});

// /api/users/:id
userRoutes.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    res.status(400);
    res.json({ success: false, data: null });
  }

  res.send({ success: true, data: user });
});

// /api/users/
userRoutes.post("/", (req, res) => {
  const user = req.body;
  const lastId = users[users.length - 1]?.id;
  user.id = lastId ? lastId + 1 : 1;
  users.push(user);
  res.send({ success: true, data: user });
});

// /api/users/:id
userRoutes.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((u) => u.id === Number(id));
  console.log("index", index);
  if (index === -1) {
    res.status(400);
    res.send({
      success: false,
      data: null,
      message: `User with id ${id} not found`,
    });
  }
  const user = users[index];

  users = users.filter((u) => u.id !== Number(id));

  res.send({ success: true, data: user, message: "User deleted" });
});

userRoutes.put("/:id", (req, res) => {
  const userData = req.body;
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    res.status(400);
    res.send({
      success: false,
      data: null,
      message: `User with id ${id} not found`,
    });
  }

  let user = users[index];
  console.log("user", user);
  user = {
    ...user,
    ...userData,
  };
  users[index] = user;

  res.json({ success: true, data: user, message: "User updated" });
});

module.exports = userRoutes;
