const express = require('express');
const router = express.Router()

router.get('/vacancy', (req, res) => {
    res.status(200).send({ title: 'Head of Tea Making'});
});

router.delete('/vacancy', (req, res) => {
    res.status(204).send();
});

router.post('/vacancies', (req, res) => {
    res.status(201).send();
});

module.exports = router;