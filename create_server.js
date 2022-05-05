const express = require('express')
const app = express()
const port = process.env.PORT || 8080
function createServer() {
  app.listen(port, () => {
    console.log(`Running on port ${port}`)
  })
}

module.exports = { createServer, app }
