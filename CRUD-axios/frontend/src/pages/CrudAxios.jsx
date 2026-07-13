import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [Data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Daftar Movie</h1>

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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{movie.title_tb_movies}</td>
                <td>{movie.year_tb_movies}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
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
