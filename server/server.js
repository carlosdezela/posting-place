const express = require('express')
const app = express()

app.use(express.json());

let data = {
  "messages": [
    {
      title: "Bob",
      text: "Buenos días mundo!",
      date: "29/3/2024"
    },
    {
      title: "Alice",
      text: "Buenas noches mundo!",
      date: "29/3/2024"
    }
  ]
}

app.get('/api', (req, res) => {
  res.json(data)
})

app.post('/msg', (req, res) => {
  let newMsg = req.body;
  data.messages.push({
    title: newMsg.title,
    text: newMsg.content,
    date: newMsg.date
  });
  console.log(data)
})

app.listen(4444, () => {
  console.log('Server started on port 4444')
})