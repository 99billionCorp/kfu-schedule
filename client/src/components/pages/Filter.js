import React from "react"
import MaterialIcon from "material-icons-react"
import ButtonLink from "../ButtonLink"
import {Link} from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import {
   fade,
   ThemeProvider,
   withStyles,
   makeStyles,
   createMuiTheme,
} from "@material-ui/core/styles"

import Autocomplete from "@material-ui/lab/Autocomplete"
import {Context} from "../../context"

const InputField = withStyles({
   root: {
      "& label.Mui-focused": {
         color: "#777",
      },
      "& .MuiInput-underline:after": {
         borderBottomColor: "#777",
      },
      "& .MuiOutlinedInput-root": {
         "& fieldset": {
            borderColor: "#777",
         },
         "&:hover fieldset": {
            borderColor: "#999",
         },
         "&.Mui-focused fieldset": {
            borderColor: "#777",
         },
      },
   },
})(TextField);

function InputFilter({filters, filter, changeFilter}) {
   const filtersKeys = Object.keys(filters)
   const courses = new Array(5).fill('').map((_, index) => ({
      title: ++index + ' курс',
      value: index
   }))
   const docs = Object.keys(filters).map(doc => ({
      title: doc,
      value: doc
   }))

   const groups = filter['doc'] && filters[filter['doc']].map(gr => ({title: gr, value: gr})) || [{title: ''}]

   const faculty = [
      {
         title: "Математики и информатики",
         value: 'math inf'
      }
   ]

   return (
      <form className="filter" action="">
         <p className="filter__header">Где ты учишься?</p>

         <Autocomplete
            options={faculty}
            style={{width: 300, marginTop: 20}}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
               <InputField {...params} label="Факультет..."/>
            )}
            onChange={(_, {value}) => {
               changeFilter(value, 'faculty')
            }}
         />
         <Autocomplete
            options={docs}
            style={{width: 300, marginTop: 10}}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <InputField {...params} label="Документ..."/>}
            onChange={(_, {value}) => {
               changeFilter(value, 'doc')
            }}
         />
         <Autocomplete
            options={groups}
            style={{width: 300, margin: '10px 0 10px'}}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <InputField {...params} label="Группа..."/>}
            onChange={(_, {value}) => {
               changeFilter(value, 'group')
            }}
         />
         <ButtonLink href='/' text='Сохранить'/>
      </form>
   )
}

export default function Filter() {
   return (
      <Context.Consumer>
         {
            ({filters, changeFilter, filter}) => {
               return (
                  <div className="card card-fullScreen">
                     <InputFilter filter={filter} filters={filters} changeFilter={changeFilter}/>

                     <Link to="/info">
                        <div className="icon-info">
                           <MaterialIcon icon="info"/>
                        </div>
                     </Link>
                  </div>
               )
            }
         }
      </Context.Consumer>
   )
}
