const express = require('express');
require('./index');

const app = express();

app.group('/', function(router){
    router.get('/', function (req,res){
        res.send('Hello World!');
    })
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`))