const express = require("express");
const movieRouter = express.Router();

const {
  readMovie,
  readMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController.js");

// app.use(cors(corsOptions))
// movieRouter.get("/movies", readMovie);
movieRouter.get("/api/movies", readMovie);

// movieRouter.get("/movies/:id", readMovieById);
movieRouter.get("/api/movies/:id", readMovieById);

// movieRouter.post("/movies/", createMovie);
movieRouter.post("/api/movies/", createMovie);

// movieRouter.put("/movies/:id", updateMovie);
movieRouter.put("/api/movies/:id", updateMovie);

// movieRouter.put("/api/movies/:id", deleteMovie);
movieRouter.delete("/api/movies/:id", deleteMovie);

module.exports = movieRouter;
