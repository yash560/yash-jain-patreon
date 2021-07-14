import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Pricing from "./Pricing";
import Home from "./Home/Home";
import Careers from "./Career/Careers";
import Jobs from "./Canva/Canva";
import Profile from "./Profile/Profile";
import AppDirectory from "./App/AppDirectory";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Hiring/components/theme.css";
import Hiring from "./Hiring/components/Hiring";
import CommentPage from "./Hiring/components/CommentPage";
import HomeCanva from "./HomeCanva/HomeCanva";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/Modal" render={(props) => <Hiring {...props} />} /> */}
        <Route exact path="/Hiring">
          <Hiring />
        </Route>
        <Route
          exact
          path="/comment/:postId?"
          render={(props) => <CommentPage {...props} />}
        />
        <Route exact path="/Podcasts">
          <App />
        </Route>{" "}
        <Route exact path="/homes">
          <HomeCanva />
        </Route>
        <Route exact path="/Jobs">
          <Jobs />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Pricing">
          <Pricing />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Careers">
          <Careers />
        </Route>
        <Route exact path="/AppDirectory">
          <AppDirectory />
        </Route>
        <Route exact path="/Settings">
          <Settings />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
