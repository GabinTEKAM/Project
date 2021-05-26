const morgan = require("morgan");
const dao = require('./rental_dao')
const express =require('express')
let app = express()

const PORT = 3001

app.use(morgan("dev"))
app.use(express.json())

app.get('/category', (req, res) => {
    dao.getCategory(req.query)
        .then(tasks =>  res.json(tasks))
        .catch( err  => res.status(500).json(err));
});

app.get('/car/:id_cat/:id_brand', (req, res) => {
    dao.Car(req.params.id_cat , req.params.id_brand )
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

// DELETE /rent/:id
app.delete('/deleterent/:id', (req, res) => {
    dao.deleteRent(req.params.id)
    .then(()=>res.status(250).end())
    .catch(error => res.status(550).json(error))
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));
