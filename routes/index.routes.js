const router = require("express").Router();
const orderRoutes = require("./order.routes");

router.use("/order", orderRoutes);

module.exports = router;
