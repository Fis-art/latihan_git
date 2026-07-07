const express = require('express');
const movieRouter = require("./src/routes/movieRouter");
const userRouter  = require('./src/routes/userRouter');
const app = express();
const port = 3000;

//Route

// const cors = require('cors')
// var corsOptions = {
// origin: 'http://localhost:3000',
// optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))

app.use(express.json())
app.use('/', movieRouter);
app.use('/' , userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});