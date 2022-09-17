var express = require("express");
var app = express();

const port = process.env.PORT || 7842;

app.use(express.static('arquivos_staticos'));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/arquivos_staticos/teste_ex.html");
});


app.listen(port, function() {

    console.log("ser rodando na url: 7842");
});