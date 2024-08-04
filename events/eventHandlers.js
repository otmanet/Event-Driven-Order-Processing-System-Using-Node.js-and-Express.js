const eventEmitter = require('./eventEmitter');

//Handle event registration event :

eventEmitter.on('orderCreated', async(event) => {
    console.log(`event Start :${event.name}`)

    //simulate  sending
    console.log(`Sending email to ${user.email}...`);

    setTimeout(() => {
        console.log(`Email sent to ${user.email}`);
    }, 1000);
})