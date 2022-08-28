const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

mongoose.connect('mongodb+srv://rotrixx:wL4edUZRax2Ke2Uh@cluster0.qylanps.mongodb.net/wikiDB')
console.log('Connected to mongoDB')

const articleSchema = {
	title: String,
	content: String
}

const Article = mongoose.model('Article', articleSchema)

///////////////////REQUESTS TARGETING ALL ARTICLES///////////////////////
app.route('/articles')
	.get((req, res) => {
		Article.find({}, (err, articles) => {
			if (!err) {
				res.send(articles)
			} else {
				res.sendStatus(500)
				console.log(err)
			}
		})
	})
	.post(async (req, res) => {
		article = new Article({
			title: req.body.title,
			content: req.body.content
		})

		await article.save((err) => {
			if(!err) {
				res.send(article)
			} else {
				console.log(err)
				res.sendStatus(500)
			}
		})
	})
	.delete((req, res) => {
		Article.deleteMany({}, (err) => {
			if (!err) {
				res.send('Successfully deleted all the articles.')
				res.sendStatus(200)
			} else {
				console.log(err)
				res.sendStatus(500)
			}
		})
	})

///////////////////REQUESTS TARGETING A SPECIFIC ARTICLE///////////////////////
app.route('/articles/:articleTitle')
	.get((req, res) => {
		Article.findOne({title: req.params.articleTitle}, (err, article) => {
			if (!err) {
				res.send(article)
			} else {
				res.sendStatus(400)
				console.log(err)
			}
		})
	})
	.put((req, res) => {
		Article.update(
			{title: req.params.articleTitle},
			{title: req.body.title, content: req.body.content},
			{overwrite: true},
			(err) => {
				if (!err) {
					res.send('Successfully updated article.')
				} else {
					console.log(err)
					res.sendStatus(400)
				}
			}
		)
	})
	.patch((req, res) => {
		Article.update(
			{title: req.params.articleTitle},
			{$set: req.body},
			(err) => {
				if (!err) {
					res.send('Successfully updated article.')
				} else {
					console.log(err)
					res.sendStatus(400)
				}
			}
		)
	})
	.delete((req, res) => {
		Article.deleteOne({title: req.params.articleTitle}, (err) => {
			if (!err) {
				res.send('Successfully deleted specific article.')
			} else {
				console.log(err)
				res.sendStatus(400)
			}
		})
	})

app.listen(process.env.PORT || 3000, function() {
	console.log('Server is up')
})