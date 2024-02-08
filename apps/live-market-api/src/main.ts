/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { acceptedOrders } from './data/accepted_orders';
import { liveDemand } from './data/live_demand';
import  {recentActivity } from './data/recent_activity';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to live-market-api!' });
});

app.get('/accepted-orders', (req, res) => {
  res.send(acceptedOrders);
});

app.get('/live-demand', (req, res) => {
  res.send(liveDemand);
});

app.get('/recent-activity', (req, res) => {
  res.send(recentActivity);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
