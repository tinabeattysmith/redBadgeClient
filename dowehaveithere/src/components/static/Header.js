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
import "./Header.css";
// import components

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
        <Navbar className="mainNavBar" expand="md">
          <NavbarBrand className="navBrand">Do We Have It?</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="buttonGroup">
                <ButtonGroup className="navButtons">
                  <Button className="navButton">Home</Button>
                  <Button className="navButton">Pantry Items</Button>
                  <Button className="navButton">Meals</Button>
                  <Button className="navButton">Requests</Button>
                  <Button className="navAdminButton">Admin Portal</Button>
                </ButtonGroup>
              </NavItem>
              <NavItem>
                <Button
                  className="navLogOutButton"
                  onClick={this.props.clickLogout}
                >
                  Logout
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
