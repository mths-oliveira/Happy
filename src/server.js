const port = 5500

//const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const path = require('path');

const pages = require('./pages')
//const allowCors = require('./cors')

//server.use(bodyParser.urlencoded({ extended: true }))
//server.use(bodyParser.json())
//server.use(allowCors)

server
//ultilizar body do req
.use(express.urlencoded({ extended: true }))

//ultilizar os arqiuivos estaiticos
.use(express.static('public'))

.set('views', path.join(__dirname, "views",))
.set('view engine', 'hbs')

/*.get('/', (req, res) => {
    return res.render('index', {})
})
*/

.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/saveOrphanage', pages.saveOrphanage)

//server.listen(port, function() {
//    console.log(`BACKEND is running on port ${port}.`)
//})

//module.exports = server

server.listen(port)