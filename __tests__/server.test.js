const mongoose = require('mongoose')
const createServer = require('../create_server')
const app = require('../server')
const supertest = require('supertest')

test('GET /api', async () => {
  await supertest(app).get('/api').expect(200)
})

test('GET /', async () => {
  await supertest(app).get('/').expect(404)
})
