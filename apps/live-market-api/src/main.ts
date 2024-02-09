/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import * as path from 'path';

import { acceptedOrders } from './data/accepted_orders';
import { liveDemand } from './data/live_demand';
import { recentActivity } from './data/recent_activity';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}))

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to live-market-api!' });
});

app.get('/accepted-orders', (req, res) => {
  res.send(acceptedOrders);
});

app.post('/accepted-orders', express.json(), (req, res) => {
  if (req.body.orderId) {
    const orderIndex = liveDemand.results.findIndex((order) => order.id === req.body.orderId);
    const newOrder = liveDemand.results.splice(orderIndex, 1)[0];
    acceptedOrders.results.push(newOrder);
    res.send({ message: 'Order accepted' });
    return;
  }

  res.send({ message: 'Could not accept order' });
});

app.get('/live-demand', (req, res) => {
  res.send(liveDemand);
});

app.post('/live-demand', express.json(), (req, res) => {
  if (req.body.orderId) {
    const orderIndex = liveDemand.results.findIndex((order) => order.id === req.body.orderId);
    liveDemand.results.splice(orderIndex, 1)[0];
    res.send({ message: 'Order ignored' });
    return;
  }

  res.send({ message: 'Could not ignore order' });
});

app.get('/recent-activity', (req, res) => {
  res.send(recentActivity);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
