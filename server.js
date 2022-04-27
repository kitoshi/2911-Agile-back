require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const movieRouter = express.Router()
const port = process.env.PORT || 8080

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
app.use('/', movieRouter)
const Movie = require('./models/movieModel')
movieRouter
  .route('/api')
  .post((req, res) => {
    const movie = new Movie(req.body)
    movie.save()
    return res.status(201).json(movie)
  })
  .get((req, res) => {
    const query = {}
    if (req.query.movie) {
      query.movie = req.query.movie
    }
    Movie.find(query, (err, movies) => {
      if (err) {
        return res.send(err)
      }
      return res.json(movies)
    })
  })

movieRouter.use('/api/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId, (err, movie) => {
    if (err) {
      return res.send(err)
    }
    if (movie) {
      req.movie = movie
      return next()
    }
    return res.sendStatus(404)
  })
})

movieRouter
  .route('/api/:movieId')
  .delete((req, res) => {
    req.movie.remove((err) => {
      if (err) {
        return res.send(err)
      }
      return res.json(Movie)
    })
  })
  .patch((req, res) => {
    const { movie } = req

    if (req.body._id) {
      delete req.body._id
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0]
      const value = item[1]
      movie[key] = value
    })
    req.movie.save((err) => {
      if (err) {
        return res.send(err)
      }
      return res.json(movie)
    })
  })
  .put((req, res) => {
    const { movie } = req
    movie.time = req.body.time
    movie.votes = req.body.votes
    movie.rating = req.body.rating
    movie.year = req.body.year
    movie.save()
    return res.json(movie)
  })
  .get((req, res) => {
    Movie.findById(req.params.movieId, (err, movie) => {
      if (err) {
        return res.send(err)
      }
      return res.json(movie)
    })
  })

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
