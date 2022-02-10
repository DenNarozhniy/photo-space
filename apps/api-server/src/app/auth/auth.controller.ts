import { CONFIG } from '../serverConfig';
const bcrypt = require('bcryptjs');
import { UserSchema } from '../models/user';
const jwt = require('jsonwebtoken');


export class AuthController {

  public registerUser = (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: hash
      };
      UserSchema.create(user, (err, doc) => {
        if (err) {
          return res.status(500).json({
            err
          });
        }
        const jwtToken = jwt.sign({
          email: doc.email,
          userId: doc._id
        }, CONFIG.jwtSecret, {
          expiresIn: '1h'
        });
        res.status(201).json({
          message: 'User successfully created!',
          token: jwtToken,
          user: doc
        });
      });
    });
  }

  public login = (req, res) => {
    let getUser;
    UserSchema.findOne({
      email: req.body.email
    }).then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed'
        });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
      if (!response) {
        return res.status(401).json({
          message: 'Authentication failed'
        });
      }
      const jwtToken = jwt.sign({
        email: getUser.email,
        userId: getUser._id
      }, CONFIG.jwtSecret, {
        expiresIn: '1h'
      });
      res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        user: getUser
      });
    }).catch( err => {
      return res.status(401).json({
        message: 'Authentication failed'
      });
    });
  }

  public getUsers = (req, res, next) => {
    UserSchema.find( (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          data
        });
      }
    });
  }

  public updateUser = (req, res, next) => {
    UserSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('User successfully updated!');
      }
    });
  }

  public deleteUser = (req, res, next) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }
}
