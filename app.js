const express = require('express');
const app = express();
const port = 3000;

// import del router 'posts'
const postsRouter = require('./routers/posts');
const errorsHandler = require('./middlewares/errorsHandler');

// const example = require('./middlewares/example');

app.use(express.static('public'));

// app.use(example)

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})


app.use('/posts', postsRouter);

app.use(errorsHandler)

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})