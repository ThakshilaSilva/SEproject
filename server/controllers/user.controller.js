const {connection} = require('../db.connection');

const getUsers = () => {        // query every user from the database
  return new Promise((resolve, reject) => {

    connection.query("select first_Name from user",
      [user.email, user.password ],
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });
};

const addNewUser = (user) => {
  return new Promise((resolve, reject) => {
      connection.query("INSERT INTO message VALUE(?,?,?,?,?,?)", [
        user.first_name,
        user.last_name,
        user.id,
        user.email,
        user.pass,
        user.conf_pass
      ], (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  }).catch((error) => {
    reject(error);
  });
};

module.exports = {
  getUsers, addNewUser
}
