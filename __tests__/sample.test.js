const app = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)

JSON_DATA = [
  {
    _id: '6270822ae36fba11c87bd6a1',
    title: 'Rush Hour 19',
    votes: 15,
    rating: 'M',
    year: '1990',
    __v: 0
  }
]

it('Gets the api endpoint', async (done) => {
  // Sends GET Request to /api endpoint
  const res = await request.get('/api')
  expect(res.status).toBe(200)
  expect(res.body).toBe(JSON_DATA)
  done()
})
