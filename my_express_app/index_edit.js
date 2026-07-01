const express = require('express');
const app = express();
const port = 3000;

let movies = [
    { id : 1, title : "Spider-Man", year : 2002 },
    { id : 2, title : "John Wick", year : 2014 },
    { id : 3, title : "The Avengers", year : 2012 },
    { id : 4, title : "Logan", year : 2014 },
]

const getMovie = (req, res) => {
  // 1. Ambil parameter format dari URL (contoh: /daftarmovie?format=json)
  const { format } = req.query;

  // Jika user meminta format json, langsung kirim datanya
  if (format === 'json') {
    return res.json(movies);
  }

  // Jika tidak, jalankan kode HTML bawaan Anda
  let result = ""
  movies.forEach(function(item, index){
    result += `<h1>  ${item.id} ${item.title} ${item.year}</h1>`
  })
  res.send(result);
};

const getObjectMovieId = (req, res) => {
  let { id } = req.params;
  // 2. Ambil parameter format dari URL (contoh: /daftarmovie/1?format=json)
  const { format } = req.query;

  let hasil = movies.find((item) => {
   return item.id === Number(id)
  })

  if (!hasil) {
    if (format === 'json') {
      return res.status(404).json({ pesan: "Movie Tidak Ditemukan" });
    }
    return res.send("<h1>Movie Tidak Ditemukan</h1>") // PERBAIKAN: Typo penutup tag </hi> diganti </h1>
  }

  // Jika film ditemukan dan meminta format json
  if (format === 'json') {
    return res.json(hasil);
  }

  // Jika tidak, jalankan kode HTML bawaan Anda
  res.send(`<h1>Title: ${hasil.title} <br> Year: ${hasil.year}</h1>`)
}

app.get('/daftarmovie', getMovie)
app.get('/daftarmovie/:id', getObjectMovieId)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
