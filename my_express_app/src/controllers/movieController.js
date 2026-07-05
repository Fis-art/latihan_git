
let movies = [
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

const yearMiddleware = (req, res, next) => {
    const { year } = req.query;

    if (year === undefined) {
        return next();
    }

    if (year === "") {
        return res.status(400).json({
            message: "parameter year wajib diisi"
        });
    }

    next();
}

const checkMovieIdMiddleware = (req, res, next) => {
    const { id } = req.params;

    const result = movies.find(item => item.id === Number(id));

    if (result) {
        next();
    } else {
        return res.status(404).json({
            message: "Movie tidak ditemukan"
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

    // Jika title dan year sama-sama diisi
    if (title !== "" && year !== "") {

        if (titleResult.length === 0 && yearResult.length === 0) {
            return res.status(404).json({
                message: "Judul dan tahun tidak ditemukan"
            });
        }

        if (titleResult.length === 0) {
            return res.status(404).json({
                message: "Judul tidak ditemukan"
            });
        }

        if (yearResult.length === 0) {
            return res.status(404).json({
                message: "Tahun tidak ditemukan"
            });
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

    // Jika title dan year sama-sama diisi,
    // tapi tidak ada movie yang cocok
    if (title !== "" && year !== "") {
        return res.status(404).json({
            message: "Tidak ada movie yang sesuai dengan judul dan tahun rilis tersebut."
        });
    }

    return res.status(404).json({
        message: "Movie tidak ditemukan"
    });
    }

    return res.status(200).json(result);
}


const getMovieByIdApi = (req, res) => {

    const { id } = req.params;
    const { title, year } = req.query;

    const result = movies.find(item => item.id === Number(id));

    if (title || year) {
        return res.json({
            message: "Pencarian berdasarkan ID. Parameter title dan year diabaikan.",
            data: result
        });
    }

    res.json(result);
}

//setting module

module.exports = {
    loggerMiddleware,
    tokenMiddleware,
    yearMiddleware,
    checkMovieIdMiddleware,
    getMovie,
    getMovieById,
    getMovieApi,
    getMovieByIdApi,
};