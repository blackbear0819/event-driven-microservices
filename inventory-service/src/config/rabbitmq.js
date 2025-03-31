const amqp = require('amqplib');

async function connectRabbitMQ() {
    const connection = await amqp.connect(process.env.RABBITMQ_URI);
    const channel = await connection.createChannel();
    const queue = 'inventory_created';

    await channel.assertQueue(queue, { durable: false });
    
    console.log(`Connected to RabbitMQ and listening on ${queue}`);
}

module.exports = { connectRabbitMQ };