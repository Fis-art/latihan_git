const connectionPool = require("../config/db.js");

const readMovie = (req, res) => {
    let queryText = "SELECT * FROM db_movies.tb_movies";

    connectionPool.query(queryText, (err, data) => {
        if (err) {
            console.error("❌ Gagal mengambil data movie:", err.message);

            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data movie"
            });
        }

        res.json(data);
    });
};

const readMovieById = (req, res) => {
    let { id } = req.params;
    let queryText = `SELECT * FROM db_movies.tb_movies WHERE id_tb_movies = ${id}`;

    connectionPool.query(queryText, (err, data) => {

        if (err) {
            console.error("❌ Gagal mengambil data movie:", err.message);

            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data movie"
            });
        }

        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Movie tidak ditemukan"
            });
        }

        res.json(data);
    });
};

const createMovie = (req, res) => {
    let { title, year } = req.body;
    console.log(req.body);

    let queryText = `INSERT INTO tb_movies (title_tb_movies, year_tb_movies)
    VALUES ("${title}", ${year})`;

    connectionPool.query(queryText, (err, data) => {
        if (err) {
            console.error("❌ Gagal menambahkan movie:", err.message);

            return res.status(500).json({
                success: false,
                message: "Gagal menambahkan movie"
            });
        }

        res.status(201).json({
            success: true,
            message: "Movie berhasil ditambahkan"
        });
    });
};

const updateMovie = (req, res) => {
    let { title, year } = req.body;
    console.log(req.body);

    let queryText = `UPDATE tb_movies
                    SET title_tb_movie = "agak laen", year_tb_movie = 2026
                    WHERE id_tb_movie = 11`;

    connectionPool.query(queryText, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        res.json({
            message: "Berhasil"
        });
    });
};

const deleteMovie = (req, res) => {
    let { title, year } = req.body;
    console.log(req.body);

    let queryText = `DELETE tb_movies
                    SET title_tb_movie = "agak laen", year_tb_movie = 2026
                    WHERE id_tb_movie = 11`;

    connectionPool.query(queryText, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        res.json({
            message: "Berhasil"
        });
    });
};


module.exports = {
    readMovie,
    readMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};