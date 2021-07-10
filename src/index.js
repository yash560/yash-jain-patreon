import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Pricing from "./Pricing";
import Home from "./Home/Home";
import Careers from "./Career/Careers";
import Canva from "./Canva/Canva";
import AppDirectory from "./App/AppDirectory";
import Settings from './Settings/Settings'
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/Podcasts">
          <App />
        </Route>{" "}
        <Route exact path="/Canva">
          <Canva />
        </Route>
        <Route exact path="/Pricing">
          <Pricing />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>{" "}
        <Route exact path="/Careers">
          <Careers />
        </Route>{" "}
        <Route exact path="/AppDirectory">
          <AppDirectory />
        </Route>{" "}
        <Route exact path="/Settings">
          <Settings />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
