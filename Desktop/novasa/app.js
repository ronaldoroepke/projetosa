const express = require('express');
const app = express();



//---------------------------------- Rotas -------------------------------------------->

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html')
});
app.get('/email', (req, res) => {
    res.sendFile(__dirname + '/email.html')
});
app.get('/novidades', (req, res) => {
    res.sendFile(__dirname + '/novidades.html')
});
app.get('/produtos', (req, res) => {
    res.sendFile(__dirname + '/produtos.html')
});
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/sobre.html')
});

//------------------------------------------------------------------------------------->

app.listen(8081, () => {
    console.log('Rodando')
});