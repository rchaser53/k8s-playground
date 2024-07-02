const express = require('express')
const app = express();

app.get("/200", (req, res) => {
  console.log("normal to stdout");
  res.send("200")
})

app.get("/400", (req, res) => {
    console.error('error to stderr');
    res.status(400).send("400")
})

app.listen(3000, ()=> {
    console.log('run server')
})
