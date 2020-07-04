const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('ok')
})

app.use('/api', require('./routes'))

app.listen(3000, () => {
    console.log('teste')
})