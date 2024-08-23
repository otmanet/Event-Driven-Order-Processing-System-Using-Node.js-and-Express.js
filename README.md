# Event-Driven Order Processing System Using Node.js and Express.js <br>
## Description :
This project is an example of an event-driven architecture implemented in a Node.js and Express.js application. The system demonstrates how to handle order creation, send email notifications, and save orders to a shopping cart using event emitters.  <br>

## Key Features: <br>
Event-Driven Architecture: The system uses events to decouple the order processing logic, email notifications, and shopping cart updates. <br>
Order Creation: When a new order is created, an event is emitted. <br>
Email Notification: Upon receiving the order creation event, an email notification is sent to the user. <br>
Order Saving: After the email is successfully sent, the order is saved to a shopping cart (panier) service. <br>
## Project Structure:<br>
 "description": "event-driven-app/\n│ ├── controllers/ \n│ └── orderController.js \n│ \n├── events/ \n│ └── eventHandlers.js \n│ └── eventEmitter.js \n│ \n├── routes/ \n│ └── indexRoutes.js\n│ └── orderRoutes.js<br>│<br> ├── middleware/ <br>│ └── errorHandler.js<br>│<br>├── helpers/<br>│ └── appError.js<br>│ └── createFile.js<br> │ └── sendMail.js <br>│ <br>├── app.js<br>|── index.js <br>└── package.json"
    
