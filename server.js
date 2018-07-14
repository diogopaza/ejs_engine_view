var express = require('express')
var faker = require('faker')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')
var app = express()
var port = 3000 

app.set('view engine', 'ejs')
app.set('views','./views/pages')
//app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended:true }))

app.listen(3000, function(){
    console.log('servidor rodando na 3000 ')
})

index = require('./routes/index')
app.use('/', index)




module.exports = app