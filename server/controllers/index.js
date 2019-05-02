var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          console.log(err)
          res.status(400);
          res.end();
        } else {
          res.status(200);
          res.send(data);
        }
      });
    },

    post: function (req, res) {
      models.messages.post(req.body[0], (err, data) => {
        if (err) {
          res.status(400);
          res.end();
        } else {
          res.status(202);
          res.end('successful message post');
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.status(400);
          res.end();
        } else {
          res.status(200);
          res.send(data);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body[0], (err, data) => {
        if (err) {
          res.status(400);
          res.end();
        } else {
          res.status(200);
          res.end('successful user post');
        }
      });
    }
  }
};

