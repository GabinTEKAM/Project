const morgan = require("morgan");
const dao = require('./rental_dao')
const express =require('express');
const { check, validationResult } = require("express-validator");
let app = express()

const PORT = 3001

app.use(morgan("dev"))
app.use(express.json())

app.get('/category', (req, res) => {
    dao.getCategory(req.query)
        .then(tasks =>  res.json(tasks))
        .catch( err  => res.status(500).json(err));
});

app.get('/car/', (req, res) => {
    console.log(`req.query.id_cat`, req.query.id_cat)
    dao.Car(req.query.id_cat )
    .then( task => {
        if(!task)
            res.status(404).send();
         else {
             console.log('res.json() :>> ', (task));
         res.json(task)
         ;}
 
    }).catch(err => res.status(500).json(err));
});

app.get('/brand', (req, res) => {
    dao.getBrand(req.query)
        .then(tasks => { 
        res.json(tasks)})
        .catch( err  => res.status(500).json(err));
});

app.post("/api/rental",
 [
    check('startDate').isDate({format: 'YYYY-MM-DD', strictMode: true}),
    check('endDate').isDate({format: 'YYYY-MM-DD', strictMode: true}),
    check('id_car').isLength({min:1 , max:10 }), 
    check('extraInsurance').isBoolean(), 
    check('driverAge').isInt(),
    check('extraDriver').isInt(), 
    check('amount').isFloat()

], 
(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
 const rental = req.body
dao.AddRental(rental)
  .then(result=>{console.log(`result`, result)
       res.status(209).json(result)})
  .catch(err => {
      console.log(`err`, err)
      res.status(500).json(err)})

}

)

// DELETE /rent/:id
app.delete('/deleterent/:id', (req, res) => {
    dao.deleteRent(req.params.id)
    .then(()=>res.status(250).end())
    .catch(error => res.status(550).json(error))
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));

