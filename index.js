const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.json({
        ok: 'Ok'
    })
})

app.listen(3001, ()=>{
    console.log('server has been started')
})