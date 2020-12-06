import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  ButtonGroup,
} from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  LinkProps,
} from "react-router-dom";
import "./Header.css";
// import components
import Home from "../home/Home";
import ItemsHome from "../items/ItemsHome";
import MealsHome from "../meals/MealsHome";
import Auth from "../auth/Auth";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar className="mainNavBar" expand="md">
            <NavbarBrand className="navBrand">Do We Have It?</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="buttonGroup">
                  <ButtonGroup className="navButtons">
                    <Link to="/home">
                      <Button className="navButton" id="homeButton">
                        Home
                      </Button>
                    </Link>
                    <Link to="/ItemsHome">
                      <Button className="navButton" id="itemButton">
                        Pantry Items
                      </Button>
                    </Link>
                    <Link to="/MealsHome">
                      <Button className="navButton" id="mealButton">
                        Meals
                      </Button>
                    </Link>
                    {/* <Link to="/RequestHome">
                      <Button className="navButton" id="requestButton">
                        Requests
                      </Button>
                    </Link> */}
                    <Link to="/AdminHome">
                      <Button className="navAdminButton" id="adminButton">
                        Admin Portal
                      </Button>
                    </Link>
                  </ButtonGroup>
                </NavItem>
                <NavItem>
                  <Button
                    className="navLogOutButton"
                    id="logoutButton"
                    onClick={this.props.clickLogout}
                  >
                    Logout
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Switch>
            {/* routes below should be protected */}
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/ItemsHome" component={ItemsHome} />
            <Route path="/MealsHome" component={MealsHome} />
            {/* <Route path="/request" component={RequestHome} />
            <Route path="/admin" component={AdminHome} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;
