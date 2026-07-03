const express = require('express');
const movieRouter = require('./src/routes/movieRouter');
const app = express();
const port = 3000;

//Route

app.get('/', (req, res) => {
    res.send('Halo Dunia !');
});

app.use('/api', movieRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});










// app.use('/api', loggerMiddleware);

// app.use('/api', mahasiswaRouter);

// app.get('/movies', getMovie);

// //route dimatikan karena pencarian year sudah digabung ke getMovie
// // app.get('/movies/year', getMovieByYear);

// app.get('/movies/:id', getMovieById);

// //tokenMiddleware dimatikan
// app.get('/api/movies',
//     // tokenMiddleware,
//     getMovieApi
// );

// app.get('/api/movies/:id', // tokenMiddleware Pasang di /api/movies/:id
//     tokenMiddleware,
//     getMovieByIdApi
// );

//route dimatikan karena pencarian year sudah digabung ke getMovieApi
// app.get('/api/movies/year',
//     tokenMiddleware,
//     getMovieByYearApi
// );

