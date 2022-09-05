const express = require('express');

const categoryRoutes = require('./routes/category.routes');
// const { port} = require('./config/serverConfig');
const app = express()
const port = 3000

categoryRoutes(app);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/home', (req, res) => {
//   res.send('welcome to homepage')
// })

// app.get('/', (req, res) => {
//     res.send('root')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

