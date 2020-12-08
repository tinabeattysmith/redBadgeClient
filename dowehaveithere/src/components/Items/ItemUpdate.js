import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import APIURL from "../../helpers/environment";
import "./ItemUpdate.css";

class ItemUpdate extends Component {
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
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="updateItemMain">
        <h3>Update Pantry Item</h3>
        <hr />
        <Form onSubmit={this.handleSubmit} className="updateItemMainForm">
          <FormGroup className="updateItemMainFormGroup">
            <Label for="itemName" className="updateItemFGLabel">
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
          <FormGroup className="updateItemMainFormGroup">
            <Label for="itemDescription" className="updateItemFGLabel">
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
          <FormGroup className="updateItemMainFormGroup">
            <Label for="itemPrice" className="updateItemFGLabel">
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
          <FormGroup className="updateItemMainFormGroup">
            <Label for="importance" className="updateItemFGLabel">
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
          <FormGroup className="updateItemMainFormGroup">
            <Label for="isUsed" className="updateItemFGLabel">
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
          <FormGroup className="updateItemMainFormGroup">
            <Label for="itemComment" className="updateItemFGLabel">
              Comments
            </Label>
            <Input
              id="updateitemComment"
              type="text"
              name="iComitemCommentment"
              value={this.state.itemComment}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="updateItemMainFormGroup">
            {/* TODO: create a call to the meal table to create drop down. */}
            <Label for="mealId" className="updateItemFGLabel">
              Associated Meal
            </Label>
            <Input
              id="updatemealId"
              type="text"
              name="mealId"
              value={this.state.mealId}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="updateItemMainFormGroup">
            {/* TODO: create a call to the category table to create drop down. */}
            <Label for="categoryId" className="updateItemFGLabel">
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
          <FormGroup className="updateItemMainFormGroup">
            <Button type="submit"> Update Item </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default ItemUpdate;
