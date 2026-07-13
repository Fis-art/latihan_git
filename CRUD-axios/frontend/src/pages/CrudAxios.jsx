import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [Data, setData] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Simpan movie yang mau diedit ke state
  const handleEdit = (movie) => {
    setEditingMovie({ ...movie });
  };

  // ✅ Update field form saat user ngetik
  const handleEditChange = (e) => {
    setEditingMovie({ ...editingMovie, [e.target.name]: e.target.value });
  };

  // ✅ Kirim PUT request
  const handleEditSubmit = () => {
    axios
      .put(`http://localhost:3000/api/movies/${editingMovie.id_tb_movies}`, {
        title_tb_movies: editingMovie.title_tb_movies,
        year_tb_movies: editingMovie.year_tb_movies,
      })
      .then(() => {
        // Update state lokal biar nggak perlu fetch ulang
        setData((prevData) =>
          prevData.map((movie) =>
            movie.id_tb_movies === editingMovie.id_tb_movies
              ? editingMovie
              : movie,
          ),
        );
        setEditingMovie(null); // Tutup form
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/movies/${id}`).then(() => {
      setData((prevData) =>
        prevData.filter((movie) => movie.id_tb_movies !== id),
      );
    });
  };

  return (
    <>
      <h1>Daftar Movie</h1>

      {/* ✅ Form edit muncul kalau editingMovie tidak null */}
      {editingMovie && (
        <div className="form-edit">
          <h3>Edit Movie</h3>
          <input
            name="title_tb_movies"
            value={editingMovie.title_tb_movies}
            onChange={handleEditChange}
            placeholder="Title"
          />
          <input
            name="year_tb_movies"
            value={editingMovie.year_tb_movies}
            onChange={handleEditChange}
            placeholder="Year"
          />
          <button onClick={handleEditSubmit}>Simpan</button>
          <button onClick={() => setEditingMovie(null)}>Batal</button>
        </div>
      )}

      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((movie, index) => (
              <tr key={movie.id_tb_movies}>
                <td>{index + 1}</td>
                <td>{movie.title_tb_movies}</td>
                <td>{movie.year_tb_movies}</td>
                <td>
                  <button onClick={() => handleEdit(movie)}>Edit</button>
                  <button onClick={() => handleDelete(movie.id_tb_movies)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudAxios;
