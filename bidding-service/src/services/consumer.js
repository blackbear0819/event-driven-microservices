const amqp = require('amqplib');
const Bid = require('../models/Bid');

async function processInventoryEvent() {
    const connection = await amqp.connect(process.env.RABBITMQ_URI);
    const channel = await connection.createChannel();
    const queue = 'inventory_created';

    await channel.assertQueue(queue, { durable: false });

    channel.consume(queue, async (msg) => {
        const inventoryItem = JSON.parse(msg.content.toString());
        console.log("Processing inventory created event: ", inventoryItem);
        channel.ack(msg);
    });
}

module.exports = { processInventoryEvent };