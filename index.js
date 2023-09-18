const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const connectDB = require('./connectMongo');
const routes = require('./src/routes');
connectDB();

app.use('/api', routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
