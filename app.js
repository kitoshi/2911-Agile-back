const express = require('express')
const router = express.Router()

router.get('/', async function (req, res, next) {
  const redis = require('redis')
  const client = redis.createClient({
    host: process.env.SECURITY_APPNAME,
    port: 10514,
    password: process.env.REDIS_PASSWORD
  })

  client.on('error', function (error) {
    console.error(error)
  })
  client.get('findItemsByKeywordsResponse', function (error, result) {
    if (error) {
      console.log(error)
      throw error
    }
    console.log('GET result ->' + result)
    res.send(result)
  })
})

module.exports = router
