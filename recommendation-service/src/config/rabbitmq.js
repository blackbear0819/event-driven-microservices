const amqp = require('amqplib');

async function connectRabbitMQ() {
    console.log('Connected to RabbitMQ for Recommendation Service.');
}

module.exports = { connectRabbitMQ };