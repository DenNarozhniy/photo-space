import {CONFIG} from '../serverConfig';

const jwt = require('jsonwebtoken');

export const authVerify = (req, res, next) => {
  try {
    console.log('test auth')
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, CONFIG.jwtSecret);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed!' });
  }
};
