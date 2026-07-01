const express = require('express');
const app = express();
const port = 3000;

//Basic Routing Express.js

let mahasiswa = ['adit', 'rendra', 'desta', 'taufik', 'andra']
let objectMahasiswa = [
  {
    nim : 223344,
    nama : "Muhammad Desta Greddy Aulia Rahman",
  },
  {
    nim : 233121,
    nama : "Daffa Seta Az-Zahra Resqiumah",
  },
  {
    nim : 235671,
    nama : "Muhammad Aditya Dwi Saputra",
  },
  {
    nim : 233511,
    nama : "Muhammad Rendra Fachrizal"
  },
  {
    nim : 233511,
    nama : "Ayudha Kusuma Rahmadhani"
  }
]

const getMahasiswa = (req, res) => {
  let result = ""
  mahasiswa.forEach(function(item, index){
    result += `<h1> ${index +1}. ${item}</h1>`
  })
  res.send("berikut daftar mahasiswa: " + result)};
  


  //Handler
  const getobjectMahasiswa = (req, res) => {
    let {nama} = req.query;
    if (nama == undefined) {
    nama = "";
    }
    let result = ""
    // let counter = 1; // Membuat penomoran yang berurutan untuk hasil pencarian

    objectMahasiswa.forEach((item, index) => {
      // PERBAIKAN: Gunakan .toLowerCase() tanpa memasukkan parameter 'nama' di dalamnya
      if (item.nama.toLocaleLowerCase().includes(nama.toLocaleLowerCase())) {
        result += `<h1>${index +1}. Nama : ${item.nama} NIM : ${item.nim}</h1>`
        // counter++; // Menambahkan counter untuk setiap hasil pencarian yang ditemukan
      }
    });
    res.send(result || "<h2>Data mahasiswa tidak ditemukan</h2>");}
    
  
  
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

app.get('/objectmahasiswa/:nim', getMahasiswaByNim); //menambahkan parameter pada routing express.js
app.get('/mahasiswa', getMahasiswa);
app.get('/objectmahasiswa', getobjectMahasiswa)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});