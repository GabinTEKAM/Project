'use strict'
const dayjs = require('dayjs');
const Rental = require('./rental');
const sqlite = require('sqlite3').verbose();
const DBNAME = './rental.db'

// open the database 

const db = new sqlite.Database(DBNAME, err => {
  if (err) throw (err)
})

const createRent = (row) => {
  return new Rental( id_rentals, startDate, endDate, extradriver, distance, extra_insurance, driverAge, id_fees, id_car);
}

exports.getCategory = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM category"
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(rows);
      }
    });

  })

};

exports.getBrand = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM brand"
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(rows);
      }
    });

  })
};




exports.Car = (cat, brand) => {
  return new Promise((resolve, reject) => {
    const query = `Select count(*) from cars 
    Inner join 
    category cat  on cat.id_cat  = cars.id_cat 
    inner join brand b on  cars.id_brand = b.id_brand
    where  cars.id_cat = ? and cars.id_brand= ? `  ;
    db.all(query, [cat, brand] ,(err, rows) => {
      if(err)
        reject(err);
      else if(rows.length === 0)
        resolve(undefined);
      else{
        resolve(rows);
      }
    });
  });
}


exports.deleteRent = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM rentals  WHERE id_rental  = ?';
    db.run(query, [id], (err) => {
      if(err)
        reject(err);
      else
        resolve(null);
    })
  });
}


exports.getRent = (filter) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM rental';
    db.all(query,  (err, rows) => {
      if(err)
        reject(err);
      else{
        let rentals = rows.map( row => createRent(row));
        
        switch(filter){ 
          case "Past":
            rentals = rentals.filter(t => t.endDate.isSameOrBefore(isToday()));
            break;
          case "future":
            rentals = rentals.filter(t => t.endDate.isAfter(isToday()));
            break;
          default:
            rentals = []; // unknown filter
        }
        
        resolve(rentals);
      }
    })

  });
}



