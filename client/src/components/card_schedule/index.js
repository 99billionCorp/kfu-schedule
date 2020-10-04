import React from "react"
import './index.scss'
import Lesson from './lesson/index'

export default function CardDay({day}){
    console.log(day['lessons'])
    const lessonsList = day['lessons'].map(({lessonName, classroom, teacher}, index) => {
        return <Lesson
            lessonName={lessonName}
            classroom={classroom}
            lessonNum={index + 1}
            teacher={teacher}
        />
    })
    const date = new Date()
    return (
        <div className="cardDay">
            <span className="cardDay__weekday">{day['weekday']}</span>
            <span className="cardDay__date">
                {
                    `${date.getDate() < 10
                    ? '0' + date.getDate()
                    : date.getDate()}
                    .
                    ${date.getMonth() < 10 
                        ? '0' + date.getMonth() 
                        : date.getMonth()
                    }`
                }
            </span>
            {lessonsList}
        </div>
    )
}