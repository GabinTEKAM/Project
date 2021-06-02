const { db } = require("./db")

exports.addUser = (user) => {
  let info = [user.email, user.password, user.name, user.surname]
  return new Promise((resolve, reject) => {
    const sql = 'insert into users values( ?,?,?,?)'
    db.run(sql, [ ...info], function (err) {
      if (err) {
        reject(err);
        return;
      }
      console.log(`object`)
      resolve();
    });
  })

}

exports.getUser = (email) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.get(sql, email, (err, row) => {
      if (err)
        reject(err); // DB error
      else if (row === undefined){
        resolve(false);} // user not found
      else {
        if (row) // password matches
       { 
          resolve({ id: row.id_user, password: row.user_pwd });}
        else
          resolve(false); // password not matching
      }
    })  
})
}