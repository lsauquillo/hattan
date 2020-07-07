const express = require('express')
const router = express.Router()

router.get( '/', (req, res)=>{	
	res.render('index.html', {'title': 'Hattan'})	
})

router.get( '/info', (req, res)=>{	
	res.render('./info.html', {'title': 'Info'})	
})

router.get( '/models', (req, res)=>{	
	res.render('./models.html', {'title': 'Models'})	
})

module.exports = router