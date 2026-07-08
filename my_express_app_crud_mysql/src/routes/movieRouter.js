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
movieRouter.get('/movies', 
    /*  
    #swagger.security = [{
        "bearerAuth": []
    }]
*/
    
    authJWT, readMovie);
movieRouter.get('/movies/:id' , 
    /*  
    #swagger.security = [{
        "bearerAuth": []
    }]
*/
    authJWT, readMovieById);
movieRouter.post('/movies/' , 
    /*  
    #swagger.security = [{
        "bearerAuth": []
    }]
*/  
    authJWT, createMovie);
movieRouter.put('/movies/:id' , 
    /*  
    #swagger.security = [{
        "bearerAuth": []
    }]
*/
    authJWT,updateMovie);
movieRouter.delete('/movies/:id' , 
    /*  
    #swagger.security = [{
        "bearerAuth": []
    }]
*/
    authJWT, deleteMovie);



module.exports = movieRouter;
