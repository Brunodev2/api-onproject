const express = require('express')
const app = express()
port = 300

app.get('/',(req, res)=>{
res.send("hello wold")
})

app.listen(port,()=>{
    console.log(`servidor rodando na porta http://localhost:${port}`)
})