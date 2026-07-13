import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [Data, setData] = useState([]);
  const [input, setInput] = useState({ movie_title: "", movie_year: 0 });

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmnit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/movies", {
        title_tb_movies: input.movie_title,
        year_tb_movies: input.movie_year,
      });
      fetchData();
      setInput({ movie_title: "", movie_year: 0 });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  // ✅ Tambahan: fungsi delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/movies/${id}`);
      setData((prevData) =>
        prevData.filter((movie) => movie.id_tb_movies !== id),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Daftar Movie</h1>

      <div className="div_input_movie">
        <h3>Tambahkan Movie</h3>
        <form onSubmit={handleSubmnit}>
          <label htmlFor="movie_title">Movie Title</label>
          <input
            type="text"
            id="movie_title"
            name="movie_title"
            placeholder="input title here"
            value={input.movie_title}
            onChange={handleChange}
            required
          />

          <label htmlFor="movie_year">Movie Year</label>
          <input
            type="number"
            id="movie_year"
            name="movie_year"
            placeholder="input year here"
            value={input.movie_year}
            onChange={handleChange}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>

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
                  <button>Edit</button>
                  {/* ✅ Tambahan: tombol delete */}
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
