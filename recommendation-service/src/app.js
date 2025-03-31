const express = require('express');
const mongoose = require('mongoose');
const recommendationRoutes = require('./routes/recommendationRoutes');
const { connectRabbitMQ } = require('./config/rabbitmq');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3003;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Recommendation Service running on port ${PORT}`);
            connectRabbitMQ();
        });
    })
    .catch(err => console.error(err));

app.use('/recommendations', recommendationRoutes);