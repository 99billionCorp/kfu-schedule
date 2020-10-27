import React from 'react'
import ButtonLink from '../ButtonLink'

export default function Info() {
   return (
      <div className="card card-fullScreen">
         <div className="greeting">
            <p className="greeting__header">Привет!</p>
            <p className="greeting__content">
               Ты находешься на сайте расписания Матфака. Здесь ты можешь посмотреть
               расписание пар и узнать, в каких аудиториях проходит занятия у
               преподавателей
            </p>

            <ButtonLink
               href="/filter"
               text="Вернуться назад"
               bgc="#777"
               color="white"
            />
         </div>
      </div>
   )
}
