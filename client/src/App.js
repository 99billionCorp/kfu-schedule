import React, { useEffect, useState } from "react";
import { useHttp } from "./hooks/http.hook";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context";

import Filter from "./components/pages/Filter";
import Schedule from "./components/pages/Schedule";
import Search from "./components/pages/Search";
import Admin from "./components/pages/Admin";
import Info from "./components/pages/Info";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./scss/index.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#777",
    },
  },
});

function App() {
  const { request } = useHttp();
  const [data, setData] = useState(null);

  useEffect(() => {
    request("/api", "POST", { test: "test" }, { header: "hhhhhh" }).then(
      (d) => {
        setData(d);
      }
    );
  }, []);

  return (
    data && (
      <Context.Provider value={data}>
        <div className="container">
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Switch>
                <Route component={Schedule} path="/" exact={true} />
                <Route component={Search} path="/search" />
                <Route component={Filter} path="/filter" />
                <Route component={Info} path="/info" />
                <Route component={Admin} exact={true} path="/admin" />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </div>
      </Context.Provider>
    )
  );
}

export default App;
