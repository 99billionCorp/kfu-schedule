const express = require('express')
const app = express()
const config = require('config')
const fs = require('fs')
const path = require('path')
const PORT = config.get('port')

app.use(express.json())

const schedule = JSON.parse(fs.readFileSync(path.join(__dirname, 'utils', 'data.json'), 'utf-8'))

app.post('/api/filters/getAll', (req, res) => {
   const data = {}

   Object.keys(schedule).forEach(key => data[key] = Object.keys(schedule[key]))
   res.json(data)
})

const defaultFilter = {
   doc: Object.keys(schedule)[0],
   group: 'МАТ-б-о-201(1)'
}

app.post('/api/', (req, res) => {
   const {filter} = req.body
   const {doc, group} = filter
   const data = schedule[doc || defaultFilter.doc]
   const send = data[doc && group || defaultFilter.group]
   res.json(send)
})

app.listen(PORT, () => {
   console.log(`Server has been started on ${PORT}...`)
})
