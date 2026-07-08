const express = require("express");
const movieRouter = express.Router();



const {
    readMovie, 
    readMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    
    
}   = require ('../controllers/movieController.js')

const { authJWT } = require("../middleware/auth");

// app.use(cors(corsOptions))
movieRouter.get('/movies', authJWT, readMovie);
movieRouter.get('/movies/:id' , authJWT, readMovieById);
movieRouter.post('/movies/' , authJWT, createMovie);
movieRouter.put('/movies/:id' , authJWT,updateMovie);
movieRouter.delete('/movies/:id' , authJWT, deleteMovie);



module.exports = movieRouter;
