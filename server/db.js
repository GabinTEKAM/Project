'use strict'
const sqlite = require('sqlite3').verbose();
const DBNAME = './rental.db'

// open the database 

exports.db = new sqlite.Database(DBNAME, err => {
  if (err) throw (err)
})
