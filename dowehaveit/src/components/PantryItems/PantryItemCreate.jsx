import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class PantryItemCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName:'',
            itemDescription: '',
            importance: '',
            itemPrice: '',
            isUsed: '',
            itemComment: '',
        };
    }

    render() {
        return (
            <div>
                PantryItem Create Component
            </div>
        )
    }
}