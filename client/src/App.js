import React, {useEffect, useState} from "react";
import "./scss/index.scss";
import { useHttp } from './hooks/http.hook'
import {Route, Switch} from 'react-router-dom'
import Schedule from "./components/pages/schedule";
import {BrowserRouter} from 'react-router-dom'
import './App.scss'

import {Context} from "./context";

function App() {
  const { request } = useHttp()
  const [data, setData] = useState(null)

    useEffect( ()=>{
        request('/api', 'POST', {test: 'test'}, {header: 'hhhhhh'}).then(d=>{
            setData(d)
        })
    }, [])

  return (
    <Context.Provider value={data}>
        <div className='container'>
            <BrowserRouter>
                <Switch>
                    <Route component={Schedule} path="/"/>
                </Switch>
            </BrowserRouter>
        </div>
    </Context.Provider>
  );
}

export default App;
//
// <div className="App">
//   <div className="header margin-bottom-medium">
//     <button className="btn header__btn">
//       <i className="material-icons">filter_list</i>
//       Фильтр
//     </button>
//
//     <button className="btn header__btn">
//       <i className="material-icons">schedule</i>
//       Расписание
//     </button>
//
//     <div className="card card-search">
//       <input
//           className="search"
//           type="text"
//           placeholder="Начните вводить текст..."
//       />
//
//       <i className="material-icons enormoustLargeIcon">search</i>
//     </div>
//   </div>
// </div>