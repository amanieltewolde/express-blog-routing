const express = require('express');
const router = express.Router();
const connection = require('../data/db');

// Base URL /posts

// READ-index
router.get('/', (req, res, next) => {
    // res.send('Lista dei post');
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, result) => {
        if (err) return next(err);
        res.json(result);
    })
})

// READ-show
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    // Prepared statements
    const postSql = 'SELECT * FROM posts WHERE id = ?';

    const tagSql = 'SELECT tags.label FROM tags JOIN post_tag ON tags.id = tag_id JOIN posts ON post_id = posts.id WHERE post_tag.post_id = ?'

    connection.query(postSql, [id], (err, postResult) => {
        if (err) return next(err);
        if (postResult.length === 0) return res.status(404).json({
            error: 'Post not found'
        })
        const post = postResult[0];

        connection.query(tagSql, [id], (err, tagResult) => {
            if (err) return next(err);
            post.tag = tagResult;
            res.json(post);
        })
    })
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
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    // Prepared statements
    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, postResult) => {
        if (err) return next(err);
        if (postResult.affectedRows === 0) return res.status(404).json({
            error: 'Post not found'
        })
        res.sendStatus(204);
    })
})

module.exports = router;