var express = require('express');
var router = express.Router();
var data = require('../data.json');

router.get('/', (req, res, next) => {
    res.send(data)
});

router.get('/:id', (req, res, next) => {
    var id = parseInt(req.params.id , 10)
    var movies = data.filter((data) => {
        return data.id === id
    });
    res.send(movies)
});

module.exports = router;