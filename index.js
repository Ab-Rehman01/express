

import morgan from "morgan";
import express from "express"; 
const app = express();
const port = 4000

const task = [
  {
    id : 1,
  task :"asdasdasd"
  },
  {
    id : 2,
    task :"sdfsfsdfsfsfd"
  }
]
//app
app.use(morgan('tiny'));


function middleware(req,res,next) {
req,requestBy ="AR";
  next();
}

app.use(middleware);
app.get('/', (req, res) => {
console.log("req.requestBt", req,requestBy);
  res.status(200).send(task)
})



app.post('/', (req, res) => {

  res.send('post Hello World!')
})


app.put('/', (req, res) => {

  res.send('put post Hello World!')
})


app.delete('/', (req, res) => {

  res.send('delete post Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})