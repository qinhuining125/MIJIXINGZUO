module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts')
  })
  app.use('/constellation_satellite', require('./constellation_satellite'))//星座
  app.use('/ephemeris_calcula', require('./ephemeris_calcula'))//星历计算
  app.use('/prediction', require('./prediction'))//预报
  app.use('/posts', require('./posts'))//测试
  app.use('/area', require('./area'))//区域

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
