const express = require('express');
const movieRouter = require("./src/routes/movieRouter");
const app = express();
const port = 3000;

//Route

app.get('/', (req, res) => {
    res.send('Halo Dunia !');
});

app.use("/", movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});