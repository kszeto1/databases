var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
        .then((data) => {
          res.status(200);
          res.send(data);
        })
        .catch(()=>{
          res.status(400);
          res.end();
        });
    },
    post: function (req, res) {
      models.messages.post(req.body[0])
        .then(() => {
          res.status(202);
          res.end('successful message post');
        })
        .catch((err) => {
          res.status(400);
          res.end(err);
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

