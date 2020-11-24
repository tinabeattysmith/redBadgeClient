import React, { Component } from 'react';
import {
    Navbar, NavbarBrand,
} from 'reactstrap';

class Sitebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">
                        Do We Have It?
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Sitebar