const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
app.use(express.json());
const connectDB = require('./connectMongo');
const routes = require('./src/routes');
connectDB();

app.use('/api', routes);
app.use(
  cors({
    origin: ['http://localhost:3000/', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })
);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
