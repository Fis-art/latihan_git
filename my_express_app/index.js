const express = require('express');
const app = express();
const port = 3000;

let movies = [
    {
        id : 1,
        title : "Spider-Man",
        year : 2002
    },
    {
        id : 2,
        title : "John Wick",
        year : 2014
    },
    {
        id : 3,
        title : "The Avengers",
        year : 2012
    },
    {
        id : 4,
        title : "Logan",
        year : 2014
    },
]

const getMovie = (req, res) => {
  let {title} = req.query;
  if (title == undefined) {
    title = ""
  }
  let result = movies.filter((item, index) => {
    return item.title.toLowerCase().includes(title.toLowerCase())
  })
  res.send(result);

};

const getObjectMovieId = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
   return item.id === Number(id)
  })
  if(!hasil) {
    return res.send("<h1>Movie Tidak Ditemukan</hi>")
  }

  res.send(`<h1>Title: ${hasil.title} <br> Year: ${hasil.year}</h1>`)

}
// penambahan route untuk API
const getMovieApi = (req, res) => {
  let {title} = req.query;
  if (title == undefined) {
    title = ""
  }
  let result = movies.filter((item, index) => {
    return item.title.toLowerCase().includes(title.toLowerCase())
  })
  // let newResult = ""
  // result.forEach(function(item, index){
  //   newResult += `<h1>  ${item.id} ${item. title} ${item.year}</h1>`
  // })
  res.json(result);

};
// penambahan route untuk API
const getObjectMovieIdApi = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
   return item.id === Number(id)
  })

  if(!hasil) {
    return res.json({ message: "Movie Tidak Ditemukan" })
  }

  res.json(hasil);

}

app.get('/daftarmovie', getMovie)
app.get('/daftarmovie/:id', getObjectMovieId)


app.get('/API/daftarmovie', getMovieApi)
app.get('/API/daftarmovie/:id', getObjectMovieIdApi)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});