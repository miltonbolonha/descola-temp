const express = require('express')
const gatsby = require('gatsby-plugin-nodejs')

const app = express()

gatsby.prepare({ app }, () => {
	// Here you can define your routes
})

const port = process.env.PORT || 3337

app.listen(port, () => console.log(`listening on port ${port}`))

// respond with "hello world" when a GET request is made to the homepage
app.get('/darkness', function (req, res) {
	res.send('hello world')
})
