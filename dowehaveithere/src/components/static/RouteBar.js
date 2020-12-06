import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navbar, NavItem, Nav, NavLink } from "reactstrap";
import Home from "../home/Home";
import ItemsHome from "../items/ItemsHome";
import MealsHome from "../meals/MealsHome";

function RouteBar() {
  return (
    <div>
      <Navbar className="navMain">
        <Nav className="routeLinks" navbar>
          <NavItem className="routeItem">
            <NavLink className="routeLink" href="/home">
              Home
            </NavLink>
          </NavItem>
          <NavItem className="routeItem">
            <NavLink className="routeLink" href="/item">
              Pantry Items Home
            </NavLink>
          </NavItem>
          <NavItem className="routeItem">
            <NavLink className="routeLink" href="/meal">
              Meals Home
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          {/* routes below should be protected */}
          <Route exact path="/home" component={Home} />
          <Route path="/item" component={ItemsHome} />
          <Route path="/meal" component={MealsHome} />
        </Switch>
      </Router>
    </div>
  );
}
export default RouteBar;
