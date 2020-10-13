const express = require('express')
const app = express()
const config = require('config')
const fs = require('fs')
const path = require('path')
const PORT = config.get('port')

app.use(express.json())

const schedule = JSON.parse(fs.readFileSync(path.join(__dirname, 'utils', 'data.json'), 'utf-8'))

app.post('/api/', (req,res)=>{
    console.log('Woow', )
    const data = schedule[Object.keys(schedule)[0]]
    const send = data['МАТ-б-о-201(1)']
    res.json(send)
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}...`)
})