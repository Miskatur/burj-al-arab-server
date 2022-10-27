const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/category.json')
const rooms = require('./data/rooms.json')


app.get('/', (req, res) => {
    res.send('This is Burj Al Arab API')
})


app.get('/categories', (req, res) => {
    res.send(categories)
})


app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const categories_details = categories.find(c => c.id == id);
    res.send(categories_details)

})

app.get('/room', (req, res) => {
    res.send(rooms)
})

app.get('/room/:id', (req, res) => {
    const id = req.params.id;
    const room = rooms.filter(r => r.id == id)
    res.send(room)
})

app.listen(port, () => {
    console.log(`This server is running on : `, port)
})