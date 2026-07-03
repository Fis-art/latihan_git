const express = require('express');
const movieRouter = express.Router();
const { 
    getMovie, 
    getMovieById, 
    getMovieApi, 
    getMovieByIdApi } = 
    require('../controllers/movieController');