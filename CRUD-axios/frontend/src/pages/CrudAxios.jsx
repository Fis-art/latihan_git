import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../config/utility";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    movieTitle: "",
    movieYear: "",
  });
  const [editId, setEditId] = useState(null);

  // ================= FETCH DATA =================
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/movies`);

      console.log("Response :", res.data);
      console.log("Type :", typeof res.data);
      console.log("Array :", Array.isArray(res.data));

      // Mencegah data.map error
      setData(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch Error :", err);

      if (err.response) {
        console.log("Status :", err.response.status);
        console.log("Response :", err.response.data);
      }

      alert("Gagal mengambil data dari server.");
      setData([]);
    }
  };

  // ================= SUBMIT =================
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editId) {
        await axios.put(`${baseUrl}/api/movies/${editId}`, {
          title: input.movieTitle,
          year: Number(input.movieYear),
        });

        setEditId(null);
      } else {
        await axios.post(`${baseUrl}/api/movies`, {
          title: input.movieTitle,
          year: Number(input.movieYear),
        });
      }

      setInput({
        movieTitle: "",
        movieYear: "",
      });

      fetchData();
    } catch (err) {
      console.error(err);

      if (err.response) {
        console.log(err.response.data);
      }

      alert("Gagal menyimpan data.");
    }
  };

  // ================= INPUT =================
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/movies/${id}`);

      fetchData();
    } catch (err) {
      console.error(err);

      if (err.response) {
        console.log(err.response.data);
      }

      alert("Gagal menghapus data.");
    }
  };

  // ================= EDIT =================
  const handleEdit = (item) => {
    setInput({
      movieTitle: item.title_tb_movies,
      movieYear: item.year_tb_movies,
    });

    setEditId(item.id_tb_movies);
  };

  // ================= CANCEL EDIT =================
  const handleCancelEdit = () => {
    setEditId(null);

    setInput({
      movieTitle: "",
      movieYear: "",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>CRUD AXIOS</h1>

      <div className="div_input_movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movieTitle">Movie Title</label>

          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Input Your Movie Title..."
            value={input.movieTitle}
            onChange={handleChange}
            required
          />

          <label htmlFor="movieYear">Movie Year</label>

          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Input Movie Year..."
            value={input.movieYear}
            onChange={handleChange}
            required
          />

          <input type="submit" value={editId ? "Update" : "Submit"} />

          {editId && (
            <button type="button" onClick={handleCancelEdit}>
              Batal
            </button>
          )}
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
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id_tb_movies}>
                  <td>{index + 1}</td>
                  <td>{item.title_tb_movies}</td>
                  <td>{item.year_tb_movies}</td>

                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (
                          window.confirm("Apa Anda yakin menghapus data ini?")
                        ) {
                          handleDelete(item.id_tb_movies);
                        }
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="bt-edit"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudAxios;
