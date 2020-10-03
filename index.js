const express = require('express')
const app = express()
const config = require('config')

const PORT = config.get('port')

app.use(express.json())

const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
const lectures = ['Математический анализ', 'Программирование', 'Правовые основы проф деятльности', 'ОБЖ', 'Алгебра']
const teachers = ['Пашкова Юлия Сергеевна', 'Старков Павел Александрович', 'Муратов Мустафа Абдурешитович', 'Хазова Юлия Александровна']

const createLec = (id) => {
    return {
        lectureName: lectures[Math.floor(Math.random() * 5)],
        weekday: weekdays[id],
        teacher: teachers[Math.floor(Math.random() * 5)]
    }
}

app.post('/api/', (req,res)=>{
    console.log('Woow', req.body)
    const data = weekdays.map((day, index) => {
        return createLec(index)
    })
    res.json(data)
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}...`)
})