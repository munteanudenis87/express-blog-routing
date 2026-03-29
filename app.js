const express = require('express')
const app = express()
const port = 3000

// importo il router della risorsa posts
const postsRouter = require('./routers/posts');

app.use(express.static('public'));

// rotta di home
app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

// rotte di CRUD
app.use("/posts", postsRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});