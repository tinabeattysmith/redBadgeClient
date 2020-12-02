import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light"  light expand="md">
                    <NavbarBrand href="/">Do We Have It?</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="navLinks">
                                <ul>
                                    <li>Home</li>
                                    <li>Pantry Items</li>
                                    <li>Meals</li>
                                    <li>Admin Portal</li>
                                </ul>
                            </NavItem>
                            <NavItem>
                                <Button onClick={this.props.clickLogout}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;