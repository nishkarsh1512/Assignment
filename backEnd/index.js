// // const { Configuration, OpenAIApi } from "openai";
// const { Configuration, OpenAIApi } = require('openai')
// const configuration = new Configuration({
//   apiKey: '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',
// })
// const openai = new OpenAIApi(configuration)
// // const response = await openai.listEngines()
// const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const Card = require('./User.js')
const History = require('./History')
const { ppid } = require('process')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbUrl =
  'mongodb+srv://test:test1@cluster0.0m748e0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Database connected')
})

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('hello guys im, express')
})

app.post('/', async (req, res) => {
  console.log('recieved')
  if (req.body) {
    res.send('okay')
  }
  console.log(req.body)
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const mobile = req.body.mobile
  const available = req.body.available
  const company = req.body.company
  const graduated = req.body.graduated
  const photo = req.body.image
  const gender = req.body.cat
  const resume = req.body.url
  // const gateNumber = req.body.gateNumber
  // const departureDate = req.body.departureDate
  // const departureTime = req.body.departureTime
  const cardEntry = new Card({
    firstName,
    lastName,
    email,
    mobile,
    available,
    company,
    graduated,
    photo,
    gender,
    resume,
  })
  cardEntry.save()
  // const fligh = new Flight({flight, airline})
  console.log('saved')
})

app.get('/show', async (req, res) => {
  const card = await Card.find({})
  res.send(card)
})

app.listen(5000, function (req, res) {
  console.log('server is running on your HP PAB')
})
