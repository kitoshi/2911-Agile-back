const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const app = express()
const db = mongoose.connect('mongodb://localhost/movieAPI')
const movieRouter = express.Router()
const port = process.env.PORT || 8082
const Movie = require('./models/movieModel')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
    movie.movieNumber = req.body.movieNumber
    movie.location = req.body.location
    movie.instructor = req.body.instructor
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

app.use('/', movieRouter)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
