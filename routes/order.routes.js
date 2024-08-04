const router = require("express").Router();
const { saveOrderConfirmation } = require("../controllers/orderController");

router.route("/saveOrder").post(saveOrderConfirmation);

module.exports = router;
