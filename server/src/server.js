const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');
const winston = require('winston');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');


"use strict";

const app = express();
app.use(bodyParser.json());

const port = 4000;
app.listen(process.env.PORT || port, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

const corsOptions = {
    "origin": ["https://smartbrain-react-quyen.herokuapp.com"],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use(cors(corsOptions));

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transport: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server.log' })
    ]
});

const db = knex({
    client: 'pg',
    connection:{
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
});

app.get('/', (req, res) => {
    res.send('This is homepage');
    logger.info('This is homepage');
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) });

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get('/profile', (req, res) => {
    db.select('*').from('users')
        .then(user => {
            if (user.length > 0) {
                res.json(user);
            } else if (user.length === 0) {
                res.status(400).json("no user exist");
            }
        })
        .catch(err => res.status(400).json("something went wrong"))
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;

    db.select('*').from('users').where({ id: id })
        .then(user => {
            if (user.length > 0) {
                console.log(user);
                res.json(user[0]);
            } else if (user.length === 0) {
                res.status(400).json("no such user");
            }

        })
        .catch(err => res.status(400).json("something went wrong"))

})

app.put('/image', (req, res) => {
    const { id } = req.body;

    db('users')
        .where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0]);
        })
})

