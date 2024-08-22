const eventEmitter = require("./eventEmitter");
const sendMail = require("../helpers/sendMail");
const createFile = require("../helpers/createFile");
// Import promises for asynchronous file operations
const fs = require("fs");

//Handle  registration event :
eventEmitter.on("orderCreated", async (event) => {
  const nameFile = "data.txt";
  try {
    // Create the file (assuming createFile is a function you've defined)
    await createFile(nameFile);

    const jsonData = JSON.stringify(event);

    // Wait for the file to be written successfully
    fs.writeFileSync(nameFile, jsonData);
    console.log("product save successfully");

    // Once the file is written, emit the event
    console.log("orderCreated event received:", event);
    eventEmitter.emit("sendMailToCustomer", event);
    // Log the start of processing the new order
    setTimeout(() => {
      console.log(
        `Start process: new order added from ${event.email_customer}`
      );
    }, 1000);
  } catch (error) {
    console.error("Failed to write file:", error);
  }
});
eventEmitter.on("sendMailToCustomer", async (event) => {
  const objectEmail = {
    subject: "Your Order Has Been Accepted!",
    message: "Congratulations! Your order has been successfully accepted.",
    to: event.email_customer, // Assuming you want to send the email to the customer
    html: `<h1>Thank you for your order!</h1><br>
      <span>If you have any questions, please contact our support team at ${event.email_supplied}</span><br>
      <a href='${event.email_supplied}'>${event.email_supplied}</a>`,
  };
  try {
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
  const objectEmail = {
    subject: "Order Received - Product Requested",
    message:
      "Your product has been requested. Please check your wallet for details.",
    to: event.email_supplied, // Assuming 'email' should be 'to' for the recipient
    html: `<h1>Thank you for trusting our team to market your product!</h1><br>
      <span>For more information, please contact your customer:</span><br>
      <a href='${event.email_customer}'>${event.email_customer}</a>`,
  };
  try {
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
