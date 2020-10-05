import React from "react"
import './index.scss'
export default function AdminMenu(){
    return (
        <div className='adminMenu'>
            <div className='adminMenu__block'>
                <h3>Создать</h3>
                <div className="adminMenu__block__links">
                    <a href="#">Предмет</a>
                    <a href="#">Группу студентов</a>
                    <a href="#">Преподавателя</a>
                    <a href="#">Аудиторию</a>
                    <a href="#">Корпус</a>
                    <a href="#">Факультет</a>
                    <a href="#">Подразделение</a>
                </div>
            </div>

            <div className="adminMenu__dropdown">
                <select name="" >
                    <option value="">Таврическая академия им В.И.Вернадского</option>
                </select>
            </div>

            <div className="adminMenu__dropdown">
                <select name="" >
                    <option value="">Факультет математики и информатики</option>
                </select>
            </div>

            <div className="adminMenu__block">
                <h3>Списки</h3>
                <div className="adminMenu__block__links">
                    <a href="#">Предметы</a>
                    <a href="#">Группы студентов</a>
                    <a href="#">Преподаватели</a>
                    <a href="#">Аудитории</a>
                </div>
            </div>

            <div className="adminMenu__block">
                <div className="adminMenu__block__link">
                    <a href="#">Формирование расписания</a>
                </div>
            </div>
        </div>
    )
}