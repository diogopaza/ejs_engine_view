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

app.listen(3000, function(){
    console.log('servidor rodando na 3000 ')
})

index = require('./routes/index')
app.use('/', index)


module.exports = app