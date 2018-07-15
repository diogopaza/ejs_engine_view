Aplicação EJS

1- Criar um diretorio para nossa Aplicação

abra o prompt do DOS
ex: md ejs
para acessar a pasta cd ejs

2- de o comando npm init -y com isso
ele ira criar o package.json 

3-logo após iremos instalar nossos pacotes que serão usados em nossa aplicação

npm i express ejs express-ejs-layouts faker body-parser --save

4-Criar um arquivo server.js inicialiando as variáveis necessárias

var express = require('express')
var faker = require('faker')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')
var app = express()
var port = 3000 

5- Depois terminamos de configurar nosso server.js

//AQUI SETAMOS NOSSO ENGINE DE VIEW PARA USAR O EJS
app.set('view engine', 'ejs')
//AGORA SETAMOS ONDE BUSCAR NOSSAS VIEWS
app.set('views','./views/pages')
//NOSSO BODYPARSER QUE CONVERTE NOSSOS DADOS DA NOSSA REQUISIÇÃO
app.use(bodyParser.urlencoded({ extended:true }))
//SUBIMOS NOSSO SERVIDOR PARA FICAR ESCUTANDO NA PORTA 3000
app.listen(3000, function(){
    console.log('servidor rodando na 3000 ')
})
//SETAMOS PARA QUANDO OUVER UMA REQUISIÇÃO NA '/' ELA SEJA REENCAMINHADA PARA NOSSA INDEX NA PASTA ROUTES
 index = require('./routes/index')
app.use('/', index)


module.exports = app

6-PARA FINALIZAR CRIAR UM ARQUIVO INDEX NA PASA ROUTES

//IMPORTANDO NOSSOS MODULOS
var express = require('express')
var router = express.Router()
var faker = require('faker')

//NOSSO ARRAY DE USUARIOS, INTERESSANTE NOTR O USO DO FAKER QUE CRIA NOMES PARA TESTE
users = [{
    name: 'Gato Lindo',
    email: faker.internet.email(),
    avatar: 'http://placekitten.com/300/300'
},{
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: 'http://placekitten.com/400/300'

},{
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: 'http://placekitten.com/500/300'

}]



//NOSSAS ROTAS USANDO O ROUTER DO EXPRESS NOTAR QUE PASSAMOS NOSSO ARRAY DE USERS COMO PARAMETRO QUE 
SERA RECEBIDO NO NOSSO FRONT-END EJS
    router.get('/', (req, res) => {

        res.render('../pages/home', {usuarios: users})
    })

    router.get('/about', (req, res) => {
        
        
        res.render('../pages/about')
     })

     router.post('/contact', (req, res) => {
         res.send('Obrigado por entrar em ccontato conosco, ' + req.body.name + ' !Responderemos em breve!')
     })




    
module.exports = router


