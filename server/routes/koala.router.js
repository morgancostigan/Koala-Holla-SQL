const express = require('express');
const router = express.Router();
const Koala = require('../models/koala.model');
Koala.sync()


router.get('/', (req, res) => {
    Koala.findAll({raw: true})
    
    .then( results => {
        console.log('results', results);

        res.send(results)
    })
    .catch(error => {
        console.log('error', error)
    })
})

router.post('/', (req, res) => {
    let koala = req.body;
    Koala.create({name: koala.name, gender: koala.gender, age: koala.age, notes: koala.notes})
    .then( result => {
        res.sendStatus(200);
    })
    .catch(err => {
        res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
    res.sendStatus(200);
})

router.delete('/:id', (req, res) => {
    res.sendStatus(200);
})


module.exports = router;