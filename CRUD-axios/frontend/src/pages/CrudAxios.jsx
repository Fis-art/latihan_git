import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [Data, setData] = useState([]);
  const [input, setInput] = useState({movie_Title:"", Movie_Year:""});

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ submit wajib
  const handleSubmnit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("http://localhost:3000/api/movies", {
          title: input.movie_Title,
          year: input.Movie_Year,
        });
    } catch (error) {
        console.error(error)
    }

  };

  const handleChange = (event) => {
    let { value,name } = event.target;
    setInput({...input, [nama]:value})


  };

  return (
    <>
      <h1>Daftar Movie</h1>
      <>
        <h3>Tambahkan Movie</h3>
        <div className="div_input_movie">
          <form onSubmit={handleSubmnit}>
            <label htmlFor="movie_title">Movie Title</label>
            <input
              type="text"
              id="movie_title"
              name="movie_title"
              placeholder="input title here"
              value=""
              required
            />

            <label htmlFor="movie_year">Movie Year</label>
            <input
              type="number"
              id="movie_year"
              name="movie_year"
              placeholder="input year here"
              required
              value=""
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </>

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
