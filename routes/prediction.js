const express = require('express')
const path = require('path')
const router = express.Router()
let db = require('../models/db')


router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'prediction.html'));
})




router.post('/', async (req, res) => {
  console.log("s")
  // const data = req.fields
  console.log(req.query.constellations)
  console.log(req.fields)
  console.log(req.body)
  console.log(req.params)
})


module.exports = router
