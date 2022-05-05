const mongoose = require('mongoose')
const createServer = require('../create_server')
const app = require('../create_server')
const supertest = require('supertest')

test('GET /api', async () => {
  await supertest(app).get('/api').expect(200)
})

test('GET /', async () => {
  await supertest(app).get('/').expect(404)
})

test('GET /api', async () => {
  await supertest(app).get('/api/6272b2e349b22bb576873e7f').expect(200)
})
