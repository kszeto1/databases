var db = require('../db').dbConnection;
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function(callback) {
      return db.query('SELECT * FROM messages;', (err, data) => {
        if (err) {
          callback(err);
          return;
        } else {
          callback(null, data);
        }
      });
    },
    post: function (body, callback) {
      var {text, room, user_id} = body;
      return db.query(`INSERT INTO messages (text, room, user_id) VALUES ('${text}', '${room}', ${user_id});`, (err, data) => {
        if (err) {
          callback(err);
          return;
        } else {
          callback(null, data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      return db.query('SELECT * FROM user;', (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      });
    },
    post: function (body, callback) {
      console.log(body);
      var {username} = body;
      return db.query(`INSERT INTO user (username) VALUES ('${username}')`, (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      });
    }
  }
};

