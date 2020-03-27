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
      "id": "111", "con_name": "xingzuo1", "con_introduction": "介绍", "list": [
        { "id": "1", "name": "卫星1" }, { "id": "12", "name": "卫星3" }
      ]
    },
    { "id": "222", "sat_name": "xingzuo2"},
    { "id": "333", "name": "xingzuo3", }
  ]
  res.send(xingzuo)
})

router.post('/', async (req, res) => {
  console.log(req.body.sat_id)
  console.log(req.body)
})
router.get('/result', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'ephemeris_calcula_result.html'));
})
router.get('/result_data', async (req, res) => {

  var result_data = [
    {
      "sat_name": "111", "propose_time": "2019", "speed": "44", "lon": "23423", "lat": "345354", "cycle": "222"
    },
    {
      "sat_name": "111", "propose_time": "2019", "speed": "44", "lon": "23423", "lat": "345354", "cycle": "222"
    },
    {
      "sat_name": "111", "propose_time": "2019", "speed": "44", "lon": "23423", "lat": "345354", "cycle": "222"
    }
  ]
  res.send(result_data)
})
module.exports = router
