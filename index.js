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
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api', routes);

const indexPath = path
  .join(__dirname, 'src', 'client', 'build', 'index.html')
  .replace('server\\', '');

app.use('/', express.static(indexPath.replace('index.html', '')));

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
