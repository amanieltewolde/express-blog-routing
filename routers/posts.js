const express = require('express');
const router = express.Router();
const connection = require('../data/db');

// Base URL /posts

// READ-index
router.get('/', (req, res) => {
    // res.send('Lista dei post');
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: 'Somenthing is wrong with the db query'
            })
        }
        res.json(result);
    })
})

// READ-show
router.get('/:id', (req, res) => {
    res.send(`Dettaglio del post ${req.params.id}`);
})

// CREATE-store
router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
})

// UPDATE-update
router.put('/:id', (req, res) => {
    res.send(`Modifica integrale del post ${req.params.id}`);
})

// UPDATE-modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
})

// DELETE-destroy
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`);
})

module.exports = router;