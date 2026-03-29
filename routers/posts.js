const express = require('express')
const router = express.Router();

// index
router.get('/', function(req, res) {
    res.send('Lista dei post');
});

// show
router.get('/:id', function(req, res) {
    res.send('Dettagli post ' + req.params.id);
});

// store
router.post('/', function(req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function(req, res) {
    res.send('Modifica post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale post '  + req.params.id);
});

// destroy

router.delete('/:id', function (req, res) {
    res.send('Cancellazione del post ' + req.params.id);
});

// esporto il router per poterlo usare in app
module.exports = router;