const express = require('express');
const app = express();
const port = 3000;

//Basic Routing Express.js

let mahasiswa = ['adit', 'debby', 'heldi', 'taufik', 'andra', 'desta']
let objectMahasiswa = [
  {
    nim : 223344,
    nama : "Aditya Saputra",
  },
  {
    nim : 235671,
    nama : "Debby Afrizal",
  },
  {
    nim : 233121,
    nama : "Heldi Saputra"
  }
]

//menambahkan query pada routing express.js
const getobjectMahasiswa = (req, res) => {
  let {nama} = req.query
  let result = ""
  console.log(nama)
  
  objectMahasiswa.forEach((item, index) => {
    if (item.nama == nama) {
      result += `<h1>${index +1}. Nama :${item.nama} NIM: ${item.nim}</h1>`
    }
  })
  res.send("berikut data mahasiswa: " + result);}



const getMahasiswa = (req, res) => {
  let result = ""
  mahasiswa.forEach(function(item, index){
    result += `<h1> ${index +1}. ${item}</h1>`
  })
  res.send("berikut daftar mahasiswa: " + result)};

const getMahasiswaByNim = (req, res) => {
  const nim = req.params.nim;
  const mahasiswa = objectMahasiswa.find((item) => {
    return item.nim === Number(nim);
  });
if (mahasiswa) {

    res.send(`<h1>Nama: ${mahasiswa.nama}, NIM: ${mahasiswa.nim}</h1>`);

  } else {
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