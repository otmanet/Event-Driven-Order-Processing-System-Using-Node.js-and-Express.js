#Event-Driven Order Processing System Using Node.js and Express.js
##Description :
This project is an example of an event-driven architecture implemented in a Node.js and Express.js application. The system demonstrates how to handle order creation, send email notifications, and save orders to a shopping cart using event emitters and services.

##Key Features:
Event-Driven Architecture: The system uses events to decouple the order processing logic, email notifications, and shopping cart updates.
Order Creation: When a new order is created, an event is emitted.
Email Notification: Upon receiving the order creation event, an email notification is sent to the user.
Order Saving: After the email is successfully sent, the order is saved to a shopping cart (panier) service.

event-driven-app/
│
├── controllers/
│   └── orderController.js
│
├── events/
│   └── eventHandlers.js
│   └── eventEmitter.js
│
├── routes/
│   └── orderRoutes.js
│
├── services/
│   └── emailService.js
│   └── panierService.js
│
├── app.js
└── package.json
