const amqp = require('amqplib');

async function connectRabbitMQ() {
    await processInventoryEvent();
}

module.exports = { connectRabbitMQ };