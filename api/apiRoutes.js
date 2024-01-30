const { Router } = require("express");

const userRoutes = require("./users/userRoutes");
const productRoutes = require("./products/productsRoutes");
const apiRoutes = Router();
const isAuthMiddleware = require("../middlewares/isAuth");
const logMiddleware = require("../middlewares/log");

// /api/users
apiRoutes.use("/users", userRoutes);

// /api/products
apiRoutes.use("/products", logMiddleware, isAuthMiddleware, productRoutes);

module.exports = apiRoutes;
