'use strict'


const { getCar, addRental, getVeh } = require('./queries');
const Rental = require('./rental');
const sqlite = require('sqlite3').verbose();
const DBNAME = './rental.db'

// open the database 

const db = new sqlite.Database(DBNAME, err => {
  if (err) throw (err)
})

const createRent = (row) => {
  return new Rental(id_rental, startDate, endDate, extradriver, distance, extra_insurance, driverAge, id_fees, id_car);
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




exports.Car = (cat) => {
  let params = "?"
  for (let param = 0; param < cat.length - 1; param++) {
    params += ", ?"

  }

  return new Promise((resolve, reject) => {
    const query = getCar(params)
    db.all(query, [...cat,], (err, rows) => {
      if (err) {
        reject(err);
      }
      else if (rows.length === 0)
        resolve(undefined);
      else {
        resolve(rows);
      }
    });
  });
}


exports.deleteRent = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM rentals  WHERE id_rental  = ?';
    db.run(query, [id], (err) => {
      if (err)
        reject(err);
      else
        resolve(null);
    })
  });
}


exports.getRent = (filter) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM rental';
    db.all(query, (err, rows) => {
      if (err)
        reject(err);
      else {
        let rentals = rows.map(row => createRent(row));
        switch (filter) {
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

// qdd nez rentql in db 
exports.AddRental = (rental) => {
  let values = [rental.startDate, rental.endDate, rental.extraDriver, rental.distance,
  rental.extraInsurance, rental.driverAge,
  rental.id_car, rental.id_user, rental.amount]
  return new Promise((resolve, reject) => {
    const sql = addRental()
    db.run(sql, values, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  })

}


// get the list of vehicle which have status free ( ie the enddate of car reservation is not higher or equal to startingdate of the new rental)
exports.getveh=(date)=>{
  let sql = getVeh()
  return new Promise((resolve, reject) => {
  db.all(sql, [date], (err, rows) => {
    if (err) {
      reject(err);
    }
    else if (rows.length === 0)
    {console.log(`null`)
      resolve(undefined);}
    else 
     { console.log('wybHSQBHDBYU?', rows)
       resolve(rows);
    }
  });
  })
}



