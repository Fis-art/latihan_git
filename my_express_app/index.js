const express = require('express');
const app = express();
const port = 3000;

const movies = [
    {id: 1, title: "Spider-Man", year: 2002},
    {id: 2, title: "John Wick", year: 2014},
    {id: 3, title: "The Avengers", year: 2012},
    {id: 4, title: "Logan", year: 2017},
]

const loggerMiddleware = (req, res, next) => {

    const waktu = new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    console.log("==================================");
    console.log("Waktu  :", waktu);
    console.log("Halaman yang diakses :", req.url);
    console.log("=================================");

    next();
}

const tokenMiddleware = (req, res, next) => {

    const { token } = req.query;

    if (token === "12345") {
        next();
    } else {
        res.status(401).json({
            message: "Token tidak valid"
        });
    }

}

const getMovie = (req, res) => {

    let { title, year } = req.query;

    if (title === undefined) {
        title = "";
    }

    if (year === undefined) {
        year = "";
    }

    let result = "";

    movies.forEach((item, index) => {

        if (
            item.title.toLowerCase().includes(title.toLowerCase()) &&
            item.year === Number(year)
        ) {
            result += `<h1>${index + 1}. ${item.title}. Tahun Rilis : ${item.year}</h1>`;
        }

    });

    if (result === "") {
        return res.send("<h1>Movie tidak ditemukan</h1>");
    }

    res.send(result);
}

const getMovieByYear = (req, res) => {
    let { year } = req.query

    if(year === undefined){
        year = ""
    }

    let result = ""

    movies.forEach((item,index) => {
        if(item.year === Number(year)){
            result += `<H1>${index+1}. ${item.title}. Tahun Rilis : ${item.year}</H1>`
        }
    })

    if(result === ""){
        return res.send("<h1>Tahun tidak ditemukan</h1>")
    }

    res.send(result)
}


const getMovieById = (req, res) => {
    const { id } = req.params ;
    const result = movies.find(item => item.id === Number(id));
    if (!result) {
        return res.status(404).send("Movie tidak ditemukan");
    }
    res.send(result.title);
}

const getMovieApi = (req, res) => {

    let { title, year } = req.query

    if(title === undefined){
        title = ""
    }

    if(year === undefined){
        year = ""
    }

    let result = movies.filter((item) => {
        return item.title.toLowerCase().includes(title.toLowerCase()) &&
               item.year === Number(year)
    })

    res.json(result)
}

const getMovieByYearApi = (req, res) => {
    let { year } = req.query

    if(year === undefined){
        year = ""
    }

    let result = movies.filter((item) => {
        return item.year === Number(year)
    })

    if(result.length === 0){
        return res.status(404).json({
            message: "Tahun tidak ditemukan"
        })
    }
    res.json(result)
}

const getMovieByIdApi = (req, res) => {
    let { id } = req.params;
    let result = movies.find((item) => {
        return item.id === Number(id);
    });

    if (!result) {
        return res.status(404).json({
            message: "Movie tidak ditemukan"
        });
    }

    res.json(result);
}
//Route

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(loggerMiddleware);

app.get('/movies', getMovie);

app.get('/movies/year', getMovieByYear);

app.get('/movies/:id', getMovieById);

app.get('/api/movies',
    tokenMiddleware,
    getMovieApi
);

app.get('/api/movies/:id',
    tokenMiddleware,
    getMovieByIdApi
);

app.get('/api/movies/year',
    tokenMiddleware,
    getMovieByYearApi
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//http://localhost:3000/movies
//without token
//http://localhost:3000/api/movies 
//with token
//http://localhost:3000/api/movies?token=12345
//search by id
//http://localhost:3000/api/movies/2
//http://localhost:3000/api/movies/2?token=12345
//search by title with token
//http://localhost:3000/api/movies?token=12345&title=Spider
//search by year with token
//http://localhost:3000/api/movies/year?token=12345&year=2020
//search by year with token
//http://localhost:3000/api/movies/year?token=12345&year=2014