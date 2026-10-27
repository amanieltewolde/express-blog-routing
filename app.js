const express = require('express');
const app = express();
const port = 3000;

// import del router 'posts'
const postsRouter = require('./routers/posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})


app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})