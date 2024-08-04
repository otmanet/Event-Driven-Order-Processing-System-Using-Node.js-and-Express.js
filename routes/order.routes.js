const router = require("express").Router();
const { saveOrderConfirmation } = require("../controllers/");

router.route("/saveOrder").post(saveOrderConfirmation);

module.exports = router;
