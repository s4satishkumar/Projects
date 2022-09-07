const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/category.routes');

// let serverConfigObject= require('./config/serverConfig')
// console.log(serverConfigObject)
// const PORT =3000;
// it is exporting port as object and print as object


const { PORT} = require('./config/serverConfig');
// we can  print only port like this 

const app = express();

/* app.use() is using the provided middleware for every incoming request to the server*/
/* We need to a body parser middleware, that will help express to read all the query and body params */
app.use(bodyParser.urlencoded({extended: true}));

categoryRoutes(app);
console.log(PORT);
app.listen(PORT, () =>{
  console.log( 'server is listening to prot :',PORT);
});


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/home', (req, res) => {
//   res.send('welcome to homepage')
// })

// app.get('/', (req, res) => {
//     res.send('root')
//   })