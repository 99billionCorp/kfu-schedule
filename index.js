const express = require('express')
const app = express()
const config = require('config')

const PORT = config.get('port')

app.use(express.json())

app.post('/', (req,res)=>{
    console.log('Woow', req.body)
    res.json({
        ok: 'Ok'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}...`)
})