import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import ItemsHome from "../items/ItemsHome";
import MealsHome from "../meals/MealsHome";

function RouteBar() {
  return (
    <Router>
      <Switch>
        {/* route '/' should be unprotected */}
        {/* <Route exact path="/" component={App} /> */}
        {/* routes below should be protected */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/item" component={ItemsHome} />
        <Route exact path="/meal" component={MealsHome} />
      </Switch>
    </Router>
  );
}
export default RouteBar;
