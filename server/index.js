const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(3000, () => {
    console.log('listening on 3000...')
})