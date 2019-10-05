const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server.listen(PORT, () => {
    console.info('Server listening at', server.address().port);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});
