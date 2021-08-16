import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404"
import Cabecalho from "./components/Cabecalho";
import Posts from "./paginas/Posts";
import Home from "./paginas/Home";

function Appx() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default Appx;
