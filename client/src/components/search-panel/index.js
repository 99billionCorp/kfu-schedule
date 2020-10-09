import React from "react"

import './index.scss'
import MaterialIcon from "material-icons-react";

export default function SearchPanel(){
    return (
        <div className="searchPanel">
            <MaterialIcon icon='search' />
            <input type="text" placeholder='Поиск' />
        </div>
    )
}