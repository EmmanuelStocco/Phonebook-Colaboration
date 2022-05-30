const express = require('express'); //importa o express

const server = express(); //cria uma variável chamada server que chama a função express

server.use(express.json()); //faz com que o express entenda JSON

const agenda = ['Brendon: 9947899', 'Lara: 559649494', 'Gregory: 559649494', 'Hunter: 992635451']; //as informações ficarão armazenadas dentro deste array

server.use((req, res, next) => { //server.use cria o middleware global
    console.time('Request'); //marca o início da requisição
    console.log(`Método: ${req.method}; URL: ${req.url}; `); //retorna qual o método e url foi chamada

    next(); //função que chama as próximas ações

    console.log('Finalizou'); //será chamado após a requisição ser concluída
    console.timeEnd('Request'); //marca o fim da requisição
});

function checkGeekExists(req, res, next) {
    const geek = agenda[req.params.index];
    if (!req.body.name) { //middleware local que irá checar se a propriedade name foi informada corretamente
        return res.status(400).json({ error: 'geek does not exist' }); //caso negativo, irá retornar um erro 400 - BAD REQUEST
    }
    req.geek = geek;

    return next(); //se o nome for informado corretamente, a função next() chama as próximas ações
}

function checkGeekInArray(req, res, next) {
    const geek = agenda[req.params.index];
    if (!geek) {
        return res.status(400).json({ error: 'geek does not exist in array' });
    } //checa se o Geek existe no array, caso negativo informa que o index não existe
    req.geek = geek;

    return next();
}

server.get('/agenda', (req, res) => {
    return res.json(agenda);
}) //rota para listar todos os agenda

server.get('/agenda/:index', checkGeekInArray, (req, res) => {
    return res.json(req.geek);
})

server.post('/agenda', checkGeekExists, (req, res) => {
    const { name } = req.body; //buscar o name informado dentro do body da requisição
    agenda.push(name);
    return res.json(agenda); //retorna a informação da variável agenda
})

server.put('/agenda/:index', checkGeekInArray, checkGeekExists, (req, res) => {
    const { index } = req.params; //recupera o index com os dados
    const { name } = req.body;

    agenda[index] = name; //sobrepõe o index obtido na rota de acordo com o novo valor

    return res.json(agenda);
}) //retorna novamente os agenda atualizados após o update

server.delete('/agenda/:index', checkGeekInArray, (req, res) => {
    const { index } = req.params; //recupera o index com os dados

    agenda.splice(index, 1); //percorre o vetor até o index selecionado e deleta uma posição no array

    return res.send();
}) // retorna os dados após a exclusão

server.listen(3000); //faz com que o servidor seja executado na porta 3000 do seu localhost:3000