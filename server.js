const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static('static'));
app.use(express.static('static'))

//Routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/static/register.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));