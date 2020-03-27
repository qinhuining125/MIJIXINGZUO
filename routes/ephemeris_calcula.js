const express = require('express')
const path = require('path')
const router = express.Router()
let db = require('../models/db')

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'ephemeris_calcula.html'));
})


router.get('/sat_find', async (req, res) => {
  var xingzuo = [
    {
      "id": "111", "name": "xingzuo1", "info": "介绍", "list": [
        { "id": "1", "name": "卫星1" }, { "id": "12", "name": "卫星3" }
      ]
    },
    { "id": "222", "name": "xingzuo2", "info": "介绍" },
    { "id": "333", "name": "xingzuo3", "info": "介绍" }
  ]
  res.send(xingzuo)
})

router.post('/', async (req, res) => {
  console.log("s")
  // const data = req.fields
  console.log(req.query)
  console.log(req.query.constellations)
  console.log(req.fields)
  console.log(req.body)
  console.log(req.params)
})


module.exports = router
