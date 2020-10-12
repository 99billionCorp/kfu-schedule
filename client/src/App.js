import React, { useEffect, useState } from "react";
import { useHttp } from "./hooks/http.hook";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context";
import "./scss/index.scss";

import Filter from "./components/pages/Filter";
import Schedule from "./components/pages/Schedule";
import Search from "./components/pages/Search";
import Admin from "./components/pages/admin";
import Info from "./components/pages/Info";

function App() {
  const { request } = useHttp();
  const [data, setData] = useState(null);

  useEffect(() => {
    request("/api", "POST", { test: "test" }, { header: "hhhhhh" }).then(
      (d) => {
        setData(d);
        console.log(data)
      }
    );
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={data}>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route component={Schedule} path="/" exact={true} />
            <Route component={Search} path="/search" />
            <Route component={Filter} path="/filter" />
            <Route component={Info} path="/info" />
            {/* <Route component={Admin} path="/admin" /> */}
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
