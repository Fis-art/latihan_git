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
    //timeMiddleware
    const waktu = new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    
    console.log("==================================");
    console.log("Hai,Taufiq");
    console.log("Waktu  :", waktu);
    console.log("Halaman yang diakses :", req.url);
    console.log("=================================");
    //Tampilkan waktu request di terminal.
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

    if (title === undefined) title = "";
    if (year === undefined) year = "";

    // Cek title
    let titleResult = movies.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
    );

    // Cek year
    let yearResult = movies.filter((item) =>
        item.year === Number(year)
    );

    // Jika keduanya diisi
    if (title !== "" && year !== "") {

        if (titleResult.length === 0 && yearResult.length === 0) {
            return res.send("<h2>Judul dan Tahun tidak ditemukan</h2>");
        }

        if (titleResult.length === 0) {
            return res.send("<h2>Judul tidak ditemukan</h2>");
        }

        if (yearResult.length === 0) {
            return res.send("<h2>Tahun tidak ditemukan</h2>");
        }
    }

    // Filter gabungan
    let result = movies.filter((item) => {
        return (
            (title === "" || item.title.toLowerCase().includes(title.toLowerCase())) &&
            (year === "" || item.year === Number(year))
        );
    });

    if (result.length === 0) {
        return res.send("<h2>Movie tidak ditemukan</h2>");
    }

    let html = "";

    result.forEach((item, index) => {
        html += `<h2>${index + 1}. <br> ${item.title}. <br> Tahun Rilis : ${item.year}</h2>`;
    });

    res.send(html);
}


// const getMovieByYear = (req, res) => {
//     let { year } = req.query

//     if(year === undefined){
//         year = ""
//     }

//     let result = ""

//     movies.forEach((item,index) => {
//         if(item.year === Number(year)){
//             result += `<H2>${index+1}. ${item.title}. Tahun Rilis : ${item.year}</H2>`
//         }
//     })

//     if(result === ""){
//         return res.send("<h2>Tahun tidak ditemukan</h2>")
//     }

//     res.send(result)
// }

// Tidak dipakai lagi karena pencarian year sudah digabung ke getMovie()
// const getMovieByYear = ...


const getMovieById = (req, res) => {

    const { id } = req.params;
    const { title, year } = req.query;

    const result = movies.find(item => item.id === Number(id));

    if (!result) {
        return res.status(404).send("<h2>Movie tidak ditemukan</h2>");
    }

    let html = "";

    if (title || year) {
        html += "<h3>⚠️ Pencarian berdasarkan ID !!!</h3>";
        html += "<h3>Parameter title dan year diabaikan.</h3><hr>";
    }

    html += `
        <h2>ID : ${result.id}</h2>
        <h2>${result.title}</h2>
        <h2>Tahun : ${result.year}</h2>
    `;

    res.send(html);
}

const getMovieApi = (req, res) => {

    let { title, year } = req.query;

    if (title === undefined) title = "";
    if (year === undefined) year = "";

    // Cek title
    let titleResult = movies.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
    );

    // Cek year
    let yearResult = movies.filter((item) =>
        item.year === Number(year)
    );

    // Jika keduanya diisi
    if (title !== "" && year !== "") {

        if (titleResult.length === 0 && yearResult.length === 0) {
            return res.send("<h2>Judul dan Tahun tidak ditemukan</h2>");
        }

        if (titleResult.length === 0) {
            return res.send("<h2>Judul tidak ditemukan</h2>");
        }

        if (yearResult.length === 0) {
            return res.send("<h2>Tahun tidak ditemukan</h2>");
        }
    }

    // Filter gabungan
    let result = movies.filter((item) => {
        return (
            (title === "" || item.title.toLowerCase().includes(title.toLowerCase())) &&
            (year === "" || item.year === Number(year))
        );
    });

    if (result.length === 0) {
        return res.send("<h2>Movie tidak ditemukan</h2>");
    }

    let html = "";

    result.forEach((item, index) => {
        html += `${index + 1}. ${item.title}. Tahun Rilis : ${item.year}`;
    });

    res.json(html);
}


////yearMiddleware

// const getMovieByYearApi = (req, res) => {
//     let { year } = req.query

//     if(year === undefined){
//         year = ""
//     }

//     let result = movies.filter((item) => {
//         return item.year === Number(year)
//     })

//     if(result.length === 0){
//         return res.status(404).json({
//             message: "Tahun tidak ditemukan"
//         })
//     }
//     res.json(result)
// }

const getMovieByIdApi = (req, res) => {

    const { id } = req.params;
    const { title, year } = req.query;

    const result = movies.find(item => item.id === Number(id));

    if (!result) {
        return res.status(404).json({
            message: "Movie tidak ditemukan"
        });
    }

    if (title || year) {
        return res.json({
            message: "Pencarian berdasarkan ID. Parameter title dan year diabaikan.",
            data: result
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

//route dimatikan karena pencarian year sudah digabung ke getMovie
// app.get('/movies/year', getMovieByYear);

app.get('/movies/:id', getMovieById);

//tokenMiddleware dimatikan
app.get('/api/movies',
    // tokenMiddleware,
    getMovieApi
);

app.get('/api/movies/:id', // tokenMiddleware Pasang di /api/movies/:id
    tokenMiddleware,
    getMovieByIdApi
);

//route dimatikan karena pencarian year sudah digabung ke getMovieApi
// app.get('/api/movies/year',
//     tokenMiddleware,
//     getMovieByYearApi
// );

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
//search by title
//http://localhost:3000/api/movies?title=John
//search by year without token
//http://localhost:3000/api/movies/year?year=2014
//search by title and year
//http://localhost:3000/api/movies?token=12345&title=John&year=2014
//with token
//http://localhost:3000/api/movies/2?token=12345
//search by title with token
//http://localhost:3000/api/movies?token=12345&title=Spider
//search by year with token
//http://localhost:3000/api/movies/year?token=12345&year=2020
//search by year with token
//http://localhost:3000/api/movies/year?token=12345&year=2014
//search by title and year with token
//http://localhost:3000/api/movies?token=12345&title=John&year=2014