const products = [{ id: 1, name: "Saba", price: "Priceless" }];

const getProducts = (req, res) => {
  console.log("langugage", req.lang);
  res.json({ success: true, data: products });
};

module.exports = {
  getProducts,
};
