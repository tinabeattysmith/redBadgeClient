import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';

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
            mealId: '',
            categoryId: '',
        };
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}item/createItem`, {
            method: 'POST',
            body: JSON.stringify({ item: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((itemData) => {
            console.log(itemData);
            this.props.updatePantryItemsArray();
            this.setState({
                itemName: '',
                itemDescription: '',
                itemPrice: '',
                importance: '',
                itemComment: '',
                isUsed: '',                
                mealId: '',
                categoryId: '',
            })
        })
    }
    render() {
        return (
            <div>
                <h3>Create a pantry item</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="itemName">Item Name</Label>
                        <Input id="itemName" type="text" name="itemName" value={this.state.itemName} placeholder="enter an item" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemDescription">Item Description</Label>
                        <Input type="text" name="itemDescription" id="itemDescription" value={this.state.itemDescription} onChange={this.handleChange} placeholder="enter a description">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemPrice">Item Price</Label>
                        <Input type="text" name="itemPrice" id="itemPrice" value={this.state.itemPrice} onChange={this.handleChange} placeholder="enter a price, if known">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label for="importance">Item Importance</Label>
                        <Input type="select" name="importance" id="importance" value={this.state.importance} onChange={this.handleChange} placeholder="enter the item importance">
                            <option></option>
                            <option value="always">Always need to have on hand</option>
                            <option value="required">Required to complete a planned meal</option>
                            <option value="wanted">Wanted, but not necessary</option>
                            <option value="special">Only when budget allows</option>
                        </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label checkfor="importance">Item has been used</Label>
                                <Input type="checkbox" name="isUsed" id="isUsed" value={this.state.IsUsed} onChange={this.handleChange}/>                            
                        </FormGroup>  
                    <FormGroup>
                        <Label for="itemComment">Comments</Label>
                        <Input id="itemComment" type="text" name="iComitemCommentment" value={this.state.itemComment} placeholder="enter item comments" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/* TODO: create a call to the meal table to create drop down. */}
                        <Label for="mealId">Associated Meal</Label>
                        <Input id="mealId" type="text" name="mealId" value={this.state.mealId} placeholder="enter an associated meal" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/* TODO: create a call to the category table to create drop down. */}
                        <Label for="categoryId">Category</Label>
                        <Input id="categoryId" type="text" name="categoryId" value={this.state.categoryId} placeholder="enter a category" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Add item </Button>
                </Form>
            </div>
        )
    }
}

export default PantryItemCreate;