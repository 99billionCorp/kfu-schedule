const express = require('express')
const app = express()
const config = require('config')
const fs = require('fs')
const path = require('path')
const PORT = config.get('port')

app.use(express.json())

const schedule = JSON.parse(fs.readFileSync(path.join(__dirname, 'utils', 'data.json'), 'utf-8'))

const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
const lectures = ['Математический анализ', 'Программирование', 'Правовые основы проф деятльности', 'ОБЖ', 'Алгебра']
const teachers = ['Пашкова Юлия Сергеевна', 'Старков Павел Александрович', 'Муратов Мустафа Абдурешитович', 'Хазова Юлия Александровна']

const createLesson = ()=>{
    return {
        lessonName: lectures[Math.floor(Math.random() * 5)],
        teacher: teachers[Math.floor(Math.random() * 4)],
        classroom: Math.floor(Math.random() * 500)
    }
}

const createDay = (id) => {
    const lessons = new Array(4).fill({}).map(e => {
        return createLesson()
    })
    return {
        weekday: weekdays[id],
        lessons
    }
}

app.post('/api/', (req,res)=>{
    console.log('Woow', )
    const data = schedule[Object.keys(schedule)[0]]
    const send = data['МАТ-б-о-201(1)']
    res.json(send)
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}...`)
})