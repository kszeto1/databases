var Sequelize = require('sequelize');
var db = require('../db').dbConnection;
var mysql = require('mysql');
var {sequelize, User, Message} = require('../orm-schema');

module.exports = {
  messages: {
    get: function() {
      return Message.sync()
        .then(() => {
          return Message.findAll();
        })
        .catch((err) => {
          return err;
        });
    },
    post: function(body) {
      var {username, message, roomname} = body;
      return Message.sync()
        .then(() => {
          return Message.create({username, message, roomname});
        })
        .catch((err) => {
          return err;
        });
    }
  },
  user: {
    get: function() {
      return User.sync()
        .then(() => {
          return User.findAll();
        })
        .catch((err) => {
          return err;
        });
    },
    post: function(body) {
      var {username} = body;  
      return User.sync()
        .then(() => {
          return User.create({username});
        })
        .catch((err) => {
          return err;
        });
    }
  }
};
