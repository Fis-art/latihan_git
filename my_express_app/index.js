const express = require('express');
const app = express();
const port = 3000;

let movies = [
{id: 1, title: "Spider-Man", year: 2002},
{id: 2, title: "John Wick", year: 2014},
{id: 3, title: "The Avengers", year: 2012},
{id: 4, title: "Logan", year: 2017},
]

const getMovies = (req, res) => {
  let result = ""
  movies.forEach(function(item, index){
    result += `<h1> ${index +1}. ${item.title} (${item.year})</h1>`
  })
  res.send("berikut daftar film: " + result)};
  

  const getobjectMoviesById = (req, res) => {
    let {id} = req.query;
    if (id == undefined) {
    id = "";
    }
    let result = ""
    // let counter = 1; // Membuat penomoran yang berurutan untuk hasil pencarian

    movies.forEach((item, index) => {
      // PERBAIKAN: Gunakan .toLowerCase() tanpa memasukkan parameter 'nama' di dalamnya
      if (item.id == id) {
        result += `<h1>${index +1}. Title : ${item.title} Year : ${item.year}</h1>`
        // counter++; // Menambahkan counter untuk setiap hasil pencarian yang ditemukan
      }
    });
    res.send(result || "<h2>Data film tidak ditemukan</h2>");}
    
  
  
  const getMahasiswaByNim = (req, res) => {
    const nim = req.params.nim;
    const mahasiswa = objectMahasiswa.find((item) => {
      return item.nim === Number(nim);
    });
if (mahasiswa) {

    res.send(`<h1>Nama: ${mahasiswa.nama}, NIM: ${mahasiswa.nim}</h1>`);

  } 
  else {
    res.status(404).send('<h1>Mahasiswa tidak ditemukan</h1>');
  }
};


app.get('/', (req, res) => {
  res.send('HALO SELAMAT DATANG!');
});


app.get('/', (req, res) => {
  res.send('HALO SELAMAT DATANG!');
});

app.get('/', (req, res) => {
  res.send('selamat datang !');
});

app.get('/', (req, res) => {
  res.send('selamat datang !');
});

app.get('/movies', getMovies);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});