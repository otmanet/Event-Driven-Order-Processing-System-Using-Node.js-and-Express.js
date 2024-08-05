const eventEmitter = require("../events/eventEmitter");
const asyncHandler = require("express-async-handler");
const fs = require("fs");
const saveOrderConfirmation = asyncHandler(async (req, res) => {
  const order = req.body;
  // Emit orderCreated event
  eventEmitter.emit("orderCreated", order);
  return res.status(200).json({
    message: "Order processing initiated.",
  });
});

async function saveOrder(order) {
  let {
    nam_product,
    type_product,
    address_customer,
    phone_customer,
    email_customer,
    email_supplied,
    quantity,
  } = order;
  const fileExist = fs.existsSync("data.json");
  console.log({ fileExist });

  if (!fileExist) {
    console.log("data.json does not exist!");
    return;
  }
  fs.writeFile(
    "data.json",
    JSON.stringify(
      {
        ...(nam_product ? nam_product : "NA"),
        ...(type_product ? type_product : "NA"),
        ...(address_customer ? address_customer : "NA"),
        ...(phone_customer ? phone_customer : "NA"),
        ...(email_customer ? email_customer : "NA"),
        ...(quantity ? quantity : 0),
        ...(type_product ? type_product : "NA"),
        ...(type_product ? type_product : "NA"),
        ...(email_supplied ? email_supplied : "NA"),
      },
      (error) => {
        if (error) {
          console.error(err);
          res.status(500).send("Error saving data");
        } else {
          res.send("Data saved successfully");
        }
      }
    )
  );
}

module.exports = {
  saveOrder,
  saveOrderConfirmation,
};
