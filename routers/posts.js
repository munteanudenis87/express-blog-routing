const express = require('express')
const router = express.Router();

const postRouter = require('./../data/post');
// index
router.get('/', function(req, res) {
    res.json(postRouter);
    // res.send('Lista dei post');
});

// show
router.get('/:id', function(req, res) {
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const postTrovato = postRouter.find( post => post.id === id);

    // facciamo il controllo
    if(!postTrovato){

        // imposto lo status 404
        res.status(404)

        // restituisco un JSON con le altre informazioni
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // restituisco un JSON con il post trovato
    res.json(postTrovato);
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