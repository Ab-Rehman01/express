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
import express from "express"; 
const app = express();
const port = 3000

app.get('/', (req, res) => {

  res.status(200).send(task)
})



app.post('/', (req, res) => {

  res.send('post Hello World!')
})


app.put('/', (req, res) => {

  res.send('put post Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})