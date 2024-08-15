const eventEmitter = require("./eventEmitter");
const sendMail = require("../helpers/sendMail");
const createFile = require("../helpers/createFile");
const fs = require("fs");

//Handle event registration event :
eventEmitter.on("orderCreated", async (event) => {
  try {
    let {
      nam_product,
      type_product,
      address_customer,
      phone_customer,
      email_customer,
      email_supplied,
      quantity,
      series,
    } = event;
    const nameFile = "order.json";
    // Create the file (assuming createFile is a function you've defined)
    await createFile(nameFile);
    const jsonData = JSON.stringify({
      nam_product,
      type_product,
      address_customer,
      phone_customer,
      email_customer,
      email_supplied,
      quantity,
      series,
    });
    fs.writeFile(nameFile, jsonData);
    console.log("orderCreated event received:", event);
    eventEmitter.emit("sendMailToCustomer", event);
    setTimeout(() => {
      console.log(`start process new order added from ${event.email_customer}`);
    }, 1000);
  } catch (err) {
    console.log(err);
  }
});
eventEmitter.on("sendMailToCustomer", async (event) => {
  try {
    const objectEmail = {
      subject: "Your Order Has Been Accepted!",
      message: "Congratulations! Your order has been successfully accepted.",
      to: event.email_customer, // Assuming you want to send the email to the customer
      html: `<h1>Thank you for your order!</h1><br>
        <span>If you have any questions, please contact our support team at ${event.email_supplied}</span><br>
        <a href='${event.email_supplied}'>${event.email_supplied}</a>`,
    };
    await sendMail(objectEmail);
    console.log("send mail to  customer");
    eventEmitter.emit("sendMailToSupplied", event);

    setTimeout(() => {
      console.log(`send email successfully to ${event.email_customer}`);
    }, 1000);
  } catch (err) {
    console.log(err);
  }
});

eventEmitter.on("sendMailToSupplied", async (event) => {
  try {
    const objectEmail = {
      subject: "Order Received - Product Requested",
      message:
        "Your product has been requested. Please check your wallet for details.",
      to: event.email_supplied, // Assuming 'email' should be 'to' for the recipient
      html: `<h1>Thank you for trusting our team to market your product!</h1><br>
        <span>For more information, please contact your customer:</span><br>
        <a href='${event.email_customer}'>${event.email_customer}</a>`,
    };
    await sendMail(objectEmail);
    console.log("send mail to  supplied");
    setTimeout(() => {
      console.log(`send email successfully to  ${event.email_supplied}`);
    }, 1000);
  } catch (err) {
    console.log(err);
  }
});
console.log("Event handlers registered.");
