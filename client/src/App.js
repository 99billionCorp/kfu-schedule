import React, { useEffect, useState } from "react";
import { useHttp } from "./hooks/http.hook";
import { useStorage } from "./hooks/storage.hook";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context";
import "./scss/index.scss";

import Filter from "./components/pages/Filter";
import Schedule from "./components/pages/Schedule";
import Search from "./components/pages/Search";
import Admin from "./components/pages/Admin";
import Info from "./components/pages/Info";

// import "./scss/index.scss";

function App() {
  const { request } = useHttp();
  const { storage } = useStorage();
  const [scheduleData, setScheduleData] = useState(null);
  const [filters, setFilters] = useState(null);
  const [filter, setFilter] = useState({
    structuralSubdivision: "",
    faculty: "",
    course: "",
    doc: "",
    group: "",
    even: "even",
  });

  useEffect(() => {
    request("/api/filters/getAll", "POST", { filter }).then(setFilters);
    setFilter({ ...filter, ...storage("filter") });
  }, []);

  useEffect(() => {
    request("/api/schedule", "POST", { filter }).then(setScheduleData);
    storage("filter", filter);
  }, [filter]);

  function changeFilter(value, target) {
    setFilter({
      ...filter,
      [target]: value,
    });
  }

  useEffect(() => {
    // console.log(filter);
  }, [filter]);

  // console.log(filters);
  return (
    scheduleData &&
    filters && (
      <Context.Provider value={{ scheduleData, filters, changeFilter, filter }}>
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route component={Schedule} path="/" exact={true} />
              <Route component={Admin} path="/admin" />
              <Route component={Search} path="/search" />
              <Route component={Filter} path="/filter" />
              <Route component={Info} path="/info" />
            </Switch>
          </BrowserRouter>
        </div>
      </Context.Provider>
    )
  );
}

export default App;
