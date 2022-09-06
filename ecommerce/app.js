const express = require('express');
const categoryRoutes = require('./routes/category.routes');

// let serverConfigObject= require('./config/serverConfig')
// console.log(serverConfigObject)
// const PORT =3000;
// it is exporting port as object and print as object

const app = express();

const { PORT} = require('./config/serverConfig');
// we can  print only port like this 

categoryRoutes(app);
console.log(PORT);
app.listen(PORT, () =>{
  console.log( 'server is listening to prot :',PORT);
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/home', (req, res) => {
//   res.send('welcome to homepage')
// })

// app.get('/', (req, res) => {
//     res.send('root')
//   })