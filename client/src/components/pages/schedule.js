import React from "react"
import Menu from "../menu";
import CardDay from "../card_schedule";
import {Context} from "../../context";

export default function Schedule(){
    return (
        <Context.Consumer>
            {data => {
                const days = data ? data.map(day => {
                    return <CardDay day={day}/>
                }) : true
                return (
                    <div>
                        <Menu/>
                        {data && days}

                    </div>
                )
            }}
        </Context.Consumer>
    )
}