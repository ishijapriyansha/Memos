const connectToMongo=require('./db')
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.use(express.json())        //to send data in res.body
app.get('/ishija', (req, res) => {
    res.send('Hello Ishija!')
  })

app.use('/api/auth',require('./routes/auth'))
app.use('/api/memos',require('./routes/memos'))

app.listen(port, () => {
  console.log(`Memos server listening on port ${port}`)
})
