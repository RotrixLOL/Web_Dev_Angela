const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

const items = []
const workItems = []

app.get('/', (req, res) => {
	res.render('list', {
		listTitle: date.getDay(),
		newItems: items
	})
})

app.get('/work', (req, res) => {
	res.render('list', {
		listTitle: 'Trabajo',
		newItems: workItems
	})
})

app.get('/about', (req, res) => {
	res.render('about')
})

app.post('/', (req, res) => {
	const item = req.body.newItem
	if (req.body.list === 'Work') {
		workItems.push(item)
		res.redirect('/work')
	} else {
		items.push(item)
		res.redirect('/')
	}
})

app.listen(3000, () => {
	console.log('App running on port 3000')
})
