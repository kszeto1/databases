DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username VARCHAR(20) NOT NULL
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  text VARCHAR(256) NOT NULL,
  room VARCHAR(20) NOT NULL,
  user_id INT NOT NULL, 
  FOREIGN KEY (user_id)
    REFERENCES user(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
      mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

