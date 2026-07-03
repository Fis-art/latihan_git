const express = require('express');
const movieRouter = express.Router();
const { 
    getMovie, 
    getMovieById, 
    getMovieApi, 
    getMovieByIdApi,
    loggerMiddleware,
    tokenMiddleware
} =     require('../controllers/movieController');

movieRouter.use(loggerMiddleware);
movieRouter.use(tokenMiddleware);
movieRouter.get('/movies', getMovie);
movieRouter.get('/movies:id', getMovieById);
movieRouter.get('/movies', getMovieApi);
movieRouter.get('/movies/:id', getMovieByIdApi);

// movieRouter.get('/api', loggerMiddleware);
// movieRouter.get('/api', tokenMiddleware);

module.exports = movieRouter;


