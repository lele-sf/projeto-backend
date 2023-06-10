const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())
const porta = 3333

const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    },
    {
        id: '3',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]

//GET
function mostraMulheres(request,response) {
    response.json(mulheres)
}

//POST
function criaMulher(request,response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta',porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.use(router.post('/mulheres',criaMulher))
app.listen(porta,mostraPorta)