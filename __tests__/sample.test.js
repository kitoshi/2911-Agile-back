const app = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

JSON_DATA = [
  {
    _id: '62699a7ab1708d2d727aa4b6',
    title: 'Rush Hour',
    votes: '10',
    rating: 'M',
    year: '1990',
    __v: 0
  },
  {
    _id: '62699c26b1708d2d727aa4b8',
    title: 'Rush Hour 2',
    votes: '10',
    rating: 'M',
    year: '1990',
    __v: 0
  },
  {
    _id: '62699c28b1708d2d727aa4ba',
    title: 'Rush Hour 3',
    votes: '10',
    rating: 'M',
    year: '1990',
    __v: 0
  },
  { _id: '6269c93fc1c355dc543db814', __v: 0 },
  { _id: '6269cfbbc1c355dc543db816', __v: 0 },
  { _id: '6269eba9807b6aa17eaa1cce', __v: 0 },
  { _id: '6269ec6c807b6aa17eaa1cd2', __v: 0 },
  { _id: '6269ec9e90f8d60f936c5f6c', __v: 0 },
  {
    _id: '6269ed0daae17b18a3989036',
    title: 'Rush Hour 4',
    votes: '10',
    rating: 'M',
    year: '1990',
    __v: 0
  },
  { _id: '6269ee52807b6aa17eaa1cd4', __v: 0 },
  { _id: '6269ef2d181bea6056db6b97', __v: 0 },
  { _id: '6269f45f21dfbc88fe8f12ba', __v: 0 },
  { _id: '6269f70189e8241beb2adda8', __v: 0 },
  { _id: '6269f70e89e8241beb2addab', __v: 0 },
  { _id: '6269f73341615aec7282d3e0', __v: 0 },
  {
    _id: '6269f75189e8241beb2addad',
    title: 'Rush Hour 10',
    votes: '0',
    rating: 'M',
    year: '1999',
    __v: 0
  },
  {
    _id: '6269f7db41615aec7282d3e4',
    title: 'Fantastic Beasts: The Secrets of Dumbledor',
    votes: '1',
    rating: 'PG-13',
    year: '2022',
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
