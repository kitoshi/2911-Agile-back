const mongoose = require('mongoose')
const createServer = require('../create_server')
const app = require('../server')
const supertest = require('supertest')

const popularMovie = {
  _id: '6272b2e349b22bb576873e7f',
  title: 'Blade',
  votes: 2018,
  rating: 'R',
  year: '1998',
  trailer: 'https://www.youtube.com/watch?v=O2Y3FFFIvRI',
  summary:
    'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
  __v: 0
}

test('GET /api', async () => {
  await supertest(app).get('/api').expect(200)
})

test('GET /', async () => {
  await supertest(app).get('/').expect(404)
})

test('GET /api', async () => {
  await supertest(app).get('/api/6272b2e349b22bb576873e7f').expect(200)
})

test('GET /api/popular', async () => {
  await supertest(app).get('/api/popular').expect(200)
})

test('GET JSON /api/popular api ', async () => {
  await supertest(app).get('/api/popular').expect(popularMovie.toString())
})
