const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({
    "messages": [
      {
        name: "Carlos De Zela",
        text: "Hola mundo!",
        date: "29/03/2024"
      },
      {
        name: "Bob",
        text: "Buenos días mundo!",
        date: "29/03/2024"
      },
      {
        name: "Alice",
        text: "Buenas noches mundo!",
        date: "29/03/2024"
      }
    ]
  })
})

app.listen(4444, () => {
  console.log('Server started on port 4444')
})