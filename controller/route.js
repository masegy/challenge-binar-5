const route = require('express').Router()
const dir = '../static/'
const path = require('path')
const axios = require('axios')
const url = 'http://localhost:3000/users'

// Users route
route.get('/users', (req, res) => {
  axios.get(url).then((response) => {
    res.json(response.data)
  })
})

// routing chapter 3
route.get('/chapter3', (req, res) => {
    res.sendFile(path.join(__dirname, dir + 'chapter3/landing.html'))
  })
  
  // routing chapter 4
  route.get('/chapter4', (req, res) => {
    res.sendFile(path.join(__dirname, dir + 'chapter4/index.html'))
  })
  
// Handle unkown endpoints
route.get('*', (req, res) => {
  res.json({
    info: 'Please use these endpoints: /chapter3, /chapter4, /users',
  })
})

  module.exports = route