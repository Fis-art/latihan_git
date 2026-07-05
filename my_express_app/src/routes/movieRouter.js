const express = require("express");
const movieRouter = express.Router();

const {
    getMovie,
    getMovieById,
    getMovieApi,
    getMovieByIdApi,
    loggerMiddleware,
    tokenMiddleware,
    yearMiddleware
} = require("../controllers/movieController");

// HTML
movieRouter.get("/movies", loggerMiddleware, getMovie);
movieRouter.get("/movies/:id", loggerMiddleware, getMovieById);

// API
movieRouter.get("/api/movies", loggerMiddleware, yearMiddleware, getMovieApi);
movieRouter.get("/api/movies/:id", loggerMiddleware, tokenMiddleware, getMovieByIdApi);

module.exports = movieRouter;