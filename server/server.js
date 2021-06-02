const morgan = require("morgan");
const dao = require('./rental_dao')
const express = require('express');
const { check, validationResult } = require("express-validator");
const userdao = require('./user') 
const bcrypt = require('bcrypt');
const { response } = require("express");
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { Cookie } = require("express-session");
const { createToken, validateTokens } = require("./jwt");

let app = express()

const PORT = 3001

app.use(morgan("dev"))
app.use(express.json())
app.use(cors({
    methods: ["GET", "POST", "DELETE", "PUT"], 
    credentials: true

}))

app.use(cookieParser( ))
app.use(session({
    key: "UserID", 
    resave: false,
    secret: "Gabino",
    cookie: {
        expires: 60*60*24 ////duration of cookie 24h
    }, 
    saveUninitialized:false
}))

const saltRounds =15 
app.get('/category', (req, res) => {
    dao.getCategory(req.query)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(500).json(err));
});

app.get('/car/',   (req, res) => {
    dao.Car(req.query.id_cat)
        .then(task => {
            if (!task)
                res.status(404).send();
            else {
                res.send(task)
                    ;
            }

        }).catch(err => res.status(500).json(err));
});

app.get('/brand', (req, res) => {
    dao.getBrand(req.query)
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => res.status(500).json(err));
});

app.post("/api/rental",
    [
        check('startDate').isDate({ format: 'YYYY-MM-DD', strictMode: true }),
        check('endDate').isDate({ format: 'YYYY-MM-DD', strictMode: true }),
        check('id_car').isLength({ min: 1, max: 10 }),
        check('extraInsurance').isBoolean(),
        check('driverAge').isInt(),
        check('extraDriver').isInt(),
        check('amount').isFloat()

    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const rental = req.body
        dao.AddRental(rental)
            .then(result => {
                res.status(209).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    })



// DELETE /rent/:id
app.delete('/deleterent/:id', (req, res) => {
    dao.deleteRent(req.params.id)
        .then(() => res.status(250).end())
        .catch(error => res.status(550).json(error))
});


///// registration and login
app.post('/api/user', (req, res) => {
    const params = req.body
     bcrypt.hash(params.password , saltRounds, (err, result)=>{
        if (err) {res.status(402).json(err)}
        params.password=result
        console.log(`params`, params)
         userdao.addUser(params)
        .then(result => res.status(250).json(result))
        .catch(err => {
            res.status(505).json(err)
        })    
    })
   
})

app.post('/api/login', (req, res) =>{ 
    console.log(`req.body`, req.body)
    userdao.getUser(req.body.email)
        .then(result =>{     
            req.session.user = result
                console.log(`req.session.user`, req.session.user)

            bcrypt.compare(req.body.password, result.password, (response)=>{
                const accessToken = createToken(result)
             res.cookie("access-tooken", accessToken, {
                 maxAge:60*60*24, 
             })
                res.status(250).json('response')   
            }
        )} )   
        .catch(err => {
            console.log(`err`, err)
            res.status(505).json(err)
        })
})



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));

