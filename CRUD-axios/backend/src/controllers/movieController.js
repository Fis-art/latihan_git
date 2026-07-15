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
    let {id} = req.params
    console.log(req.body);

    let queryText = `UPDATE tb_movies
                    SET title_tb_movies = "${title}", year_tb_movies = ${year}
                    WHERE id_tb_movies = ${id}`;

    connectionPool.query(queryText, (err) => {
        if (err) {
            console.error("❌ Gagal update movie:", err.message);

            return res.status(500).json({
                success: false,
                message: "Gagal update movie"
            });
        }

        res.status(200).json({
            success: true,
            message: "Movie berhasil di update"
        });
    });
};

const deleteMovie = (req, res) => {
    let {id} = req.params
    console.log(req.body);

    let queryText = `DELETE FROM tb_movies
                    WHERE id_tb_movies = ${id}`;

    connectionPool.query(queryText, (err, data) => {
    if (err) {
        console.error("❌ Gagal delete movie:", err.message);
        return res.status(500).json({
            success: false,
            message: "Gagal delete movie"
        });
    }
    if (data.affectedRows === 0) {
        return res.status(404).json({
            success: false,
            message: "Movie tidak ditemukan"
        });
    }
    res.json({
        success: true,
        message: "Movie berhasil dihapus"
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