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

const defaultScheduleDoc = schedule[Object.keys(schedule)[0]]
const defaultSchedule = defaultScheduleDoc[Object.keys(defaultScheduleDoc)[0]]

app.post('/api/schedule', (req, res) => {
   const {filter} = req.body
   const {doc, group} = filter
   const data = doc && schedule && schedule[doc] && schedule[doc][group] ? schedule[doc][group] : defaultSchedule

   res.json(data)
})

if(process.env.NODE_ENV === 'production'){
   app.use('/', express.static(path.join(__dirname, 'client', 'build')))
   app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
   })
}

app.listen(PORT, () => {
   console.log(`Server has been started on ${PORT}...`)
})
