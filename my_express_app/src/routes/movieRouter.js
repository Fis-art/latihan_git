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

movieRouter.get('/', getMovie);
movieRouter.get('/:id', getMovieById);
movieRouter.get('/api', getMovieApi);
movieRouter.get('/api/:id', getMovieByIdApi);

movieRouter.get('/api', loggerMiddleware);
movieRouter.get('/api', tokenMiddleware);

module.exports = movieRouter;


