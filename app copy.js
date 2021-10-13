const { DCC } = require('dcc-utils');
const express = require('express');
const app = express();
const port = 3002;

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/getGP', (req, res) => {
    DCC.fromRaw(req.body.params.updates[0].value).then(dati => {
        res.send(dati);
    }, onerror => {
        res.send({status: 'error', error: onerror})
    });
});

app.listen(port,() => console.log(`Hello world app listening on port ${port}!`));
