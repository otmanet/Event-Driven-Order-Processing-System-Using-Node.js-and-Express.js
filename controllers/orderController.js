const eventEmitter = require("../events/eventEmitter");
const asyncHandler = require("express-async-handler");

const saveOrderConfirmation = asyncHandler(async (req, res) => {
  const order = req.body;
  // Emit orderCreated event

  eventEmitter.emit("orderCreated", order);
  return res.status(200).json({
    message: "Order processing initiated.",
  });
});

module.exports = {
  saveOrderConfirmation,
};
