const express = require("express");
const movieRouter = express.Router();

// const {
//     getMovie,
//     getMovieById,
//     getMovieApi,
//     getMovieByIdApi,
//     loggerMiddleware,
//     tokenMiddleware,
//     yearMiddleware,
//     timeMiddleware,
//     checkMovieIdMiddleware,
// } = require("../controllers/movieController");

// Logger dipasang secara global untuk semua route di dalam router ini
// movieRouter.use(loggerMiddleware);

// // HTML
// movieRouter.get("/movies", getMovie);
// movieRouter.get("/movies/:id", getMovieById);

// // API
// // Sesuai modul: tokenMiddleware HANYA dipasang di sini
// movieRouter.get("/api/movies", tokenMiddleware, yearMiddleware, getMovieApi);

// // Sesuai modul: di sini TANPA token, tapi ditambah timeMiddleware dari tugas mandiri
// movieRouter.get("/api/movies/:id", timeMiddleware, checkMovieIdMiddleware, getMovieByIdApi);

const {
    readMovie, 
    readMovieById,
    createMovie,
    updateMovie,
    deleteMovie,


}   = require ('../controllers/movieController.js')

// app.use(cors(corsOptions))
movieRouter.get('/movies', readMovie);
movieRouter.get('/movies/:id' , readMovieById);
movieRouter.post('/movies/' , createMovie);
movieRouter.put('/movies/:id' ,updateMovie);
movieRouter.delete('/movies/:id' , deleteMovie);


module.exports = movieRouter;
