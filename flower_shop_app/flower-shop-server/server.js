const express = require('express');
const app = express();
const port = 3000;

let orders = []; // Array to store orders

app.use(express.json());

// Route to fetch all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Route to create a new order
app.post('/orders', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export app for testing purposes
