import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Tv from "../routes/Tv";
import Search from "../routes/Search";

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/search" exact component={Search} />
    </>
  </Router>
);
