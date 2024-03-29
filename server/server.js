const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({ "users": ["John", "Jane", "Alice"] })
})

app.listen(4444, () => {
    console.log('Server started on port 4444')
})