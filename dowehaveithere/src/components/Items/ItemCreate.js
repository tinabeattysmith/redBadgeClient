import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from "../../helpers/environment";
import "./ItemCreate.css";

class PantryItemCreate extends Component {
  // accepts props (sessionToken) from ItemHome
  constructor(props) {
    super(props);
    // setting initial state variables
    this.state = {
      pantryItem: {
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemComment: "",
        isUsed: "",
        importance: "",
        mealId: "",
        categoryId: "",
      },
    };
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}item/createItem`, {
      method: "POST",
      body: JSON.stringify({
        pantryItem: {
          itemName: "",
          itemDescription: "",
          itemPrice: "",
          itemComment: "",
          isUsed: "",
          importance: "",
          mealId: "",
          categoryId: "",
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // this.props.updatePantryItemsArray();
        this.setState({ data });
      });
  };
  render() {
    return (
      <div className="createItemMain">
        <h3>Create a Pantry Item</h3>
        <hr />
        <Form onSubmit={this.handleSubmit} className="createItemMainForm">
          <FormGroup className="createItemFormGroup">
            <Label for="itemName" className="createItemFGLabel">
              Item Name
            </Label>
            <Input
              id="itemName"
              type="text"
              name="itemName"
              value={this.state.itemName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            <Label for="itemDescription" className="createItemFGLabel">
              Item Description
            </Label>
            <Input
              type="text"
              name="itemDescription"
              id="itemDescription"
              value={this.state.itemDescription}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            <Label for="itemPrice" className="createItemFGLabel">
              Item Price
            </Label>
            <Input
              type="text"
              name="itemPrice"
              id="itemPrice"
              value={this.state.itemPrice}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            <Label for="importance" className="createItemFGLabel">
              Item Importance
            </Label>
            <Input
              type="select"
              name="importance"
              id="importance"
              value={this.state.importance}
              onChange={this.handleChange}
            >
              <option></option>
              <option value="always">Always need to have on hand</option>
              <option value="required">
                Required to complete a planned meal
              </option>
              <option value="wanted">Wanted, but not necessary</option>
              <option value="special">Only when budget allows</option>
            </Input>
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            <Label for="isUsed" className="createItemFGLabel">
              Item used?
            </Label>
            <Input
              type="select"
              name="importance"
              id="importance"
              value={this.state.importance}
              onChange={this.handleChange}
            >
              <option></option>
              <option value="usedYes">Yes</option>
              <option value="usedNo">No</option>
            </Input>
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            <Label for="itemComment" className="createItemFGLabel">
              Comments
            </Label>
            <Input
              id="itemComment"
              type="text"
              name="iComitemCommentment"
              value={this.state.itemComment}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            {/* TODO: create a call to the meal table to create drop down. */}
            <Label for="mealId" className="createItemFGLabel">
              Associated Meal
            </Label>
            <Input
              id="mealId"
              type="text"
              name="mealId"
              value={this.state.mealId}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            {/* TODO: create a call to the category table to create drop down. */}
            <Label for="categoryId" className="createItemFGLabel">
              Category
            </Label>
            <Input
              id="categoryId"
              type="text"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="createItemFormGroup">
            <Button type="submit"> Add Item </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default PantryItemCreate;
