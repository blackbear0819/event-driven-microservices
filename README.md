# Event-Driven Microservices

## Overview
This is an event-driven microservices system designed using Node.js, MongoDB, and RabbitMQ. It consists of three services: Inventory Service, Bidding Service, and Recommendation Service, and communicates via RabbitMQ for events.

## Components
1. **Inventory Service**
   - Manages product inventories.
   - Publishes `inventory_created` events when a new inventory item is added.

2. **Bidding Service**
   - Manages bid submissions from users.
   - Listens for `inventory_created` events to suggest bids.

3. **Recommendation Service**
   - Provides optimal bid recommendations based on stored data and market trends.

## Technologies
- Node.js
- MongoDB
- RabbitMQ

## Setup Instructions
### 1. Clone the Repository
```
git clone https://github.com/blackbear0819/event-driven-microservices.git
cd event-driven-microservices
```
### 2. Docker Setup
Make sure you have Docker installed. Then, run:
```
docker-compose up --build
```
### 3. Access the Services
- Inventory Service: http://localhost:3001/inventory
- Bidding Service: http://localhost:3002/bids
- Recommendation Service: http://localhost:3003/recommendations

## API Endpoints
### Inventory Service
- POST /inventory: Create a new inventory item.
- GET /inventory: Get all inventory items.
### Bidding Service
- POST /bids: Place a new bid.
- GET /bids: Get all bids.
### Recommendation Service
- GET /recommendations: Get all recommendations.

## License
This project is licensed under the MIT License.

```
This setup provides a basic structure for an event-driven microservices architecture using Node.js, MongoDB, and RabbitMQ. You'll be able to run these services using Docker and communicate via RabbitMQ as required. You can expand on this by adding more features, such as actual bid recommendation algorithms, better error handling, logging, and more sophisticated event processing logic.

Feel free to customize any part of the code and structure to best fit your needs!
```
