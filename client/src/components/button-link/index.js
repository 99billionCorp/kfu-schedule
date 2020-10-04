import React from "react"
import MaterialIcon, {colorPalette} from 'material-icons-react'
import './index.scss'

export default function ButtonLink({href = '#', text = '', icon = ''}) {
    console.log(href)
    return (
        <a href={href} className='button-link'>
            <MaterialIcon icon={icon} color='#212121'/>
            <span>{text}</span>
        </a>
    )
}