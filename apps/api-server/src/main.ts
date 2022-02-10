import * as express from 'express';
import { Routes } from './app/routes';
import { PORT } from './app/constants/api-constants';
import { CONFIG } from './app/serverConfig';

const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
import * as cors from 'cors';
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
const routes = new Routes();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('tiny'));
app.use(fileUpload({
  createParentPath: true
}));


// apply all routes
routes.allRoutes(app);

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(CONFIG.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
},
  error => {
    console.log('Database can\'t be connected: ' + error);
  }
);

// Remove MongoDB warning error
mongoose.set('useCreateIndex', true);


const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
server.on('error', console.error);
