const express = require('express')
const userroute = require('./src/routes/user.routes')
const app = express()
const port = 300




app.use('/soma', userroute)











app.listen(port,()=>{
    console.log(`servidor rodando na porta http://localhost:${port}`)
})