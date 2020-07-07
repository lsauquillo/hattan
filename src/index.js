const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()

//settings
app.set('port', 3000)
app.engine('html', require('ejs').renderFile)// trata .html con .ejs
app.set('view engine', 'ejs')
app.set('views', path.join( __dirname, './views'))




//middlewears
app.use(function (req, res, next){
	console.log('Middelware previo a las peticiones.')
	next()
})

//routes
app.use( require('./routes'))

//static files
app.use(express.static(path.join(__dirname, 'public')))


//server listening
app.listen(app.get('port'), () => {
	console.log(`Server listen on port ${app.get('port')}...`)
})