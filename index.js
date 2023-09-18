const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
app.use(express.json());
const connectDB = require('./connectMongo');
const routes = require('./src/routes');
connectDB();
//**red */
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('./src/client/build/index.html');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
