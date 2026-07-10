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
app.use('/' , userRouter);
app.use('/', movieRouter);

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});