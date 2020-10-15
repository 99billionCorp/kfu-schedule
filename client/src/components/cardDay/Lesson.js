import React from "react";
import {capitalize} from "@material-ui/core";

export default function Lesson({lessonNum, lessonName = '', teacher = '', classroom = ''}) {
   let link = null
   if (classroom.slice(0, 4) === 'http') {
      link = <a href={classroom}>Ссылка</a>
   }
   return (
      <div className="card__lesson">
         <div className="card__name ">{capitalize(lessonName)}</div>
         <div className="card__bottom">
            <div className="card__teacher">{teacher}</div>
            <div className="card__classroom">{link || classroom}</div>
         </div>
      </div>
   );
}
