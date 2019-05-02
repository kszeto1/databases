var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'student', 'student');

var Message = sequelize.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  message: {
    type: Sequelize.STRING(256),
    allowNull: false
  },
  roomname: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
}, { timestamps: false });


var User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true        
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, { timestamps: false });


module.exports.User = User;
module.exports.Message = Message;
module.exports.sequelize = sequelize;
