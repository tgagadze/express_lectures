const { Router } = require("express");
const { getProducts } = require("./handlers");
const productsRoutes = Router();

productsRoutes.get("/", getProducts);

module.exports = productsRoutes;
