import React from "react"
import ButtonLink from "../button-link";
import './index.scss'

export default function Menu() {
    return (
        <div className='menu'>
            <ButtonLink text='Фильтр' icon='filter_list' />
            <ButtonLink text='Найти' icon='search'/>
        </div>
    )
}