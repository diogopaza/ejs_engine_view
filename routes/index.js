var express = require('express')
var router = express.Router()
var faker = require('faker')

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


