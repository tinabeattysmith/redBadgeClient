import React, { Component } from "react";
import { Table, Button, ButtonGroup } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./ItemsHome.css";
import APIURL from "../../helpers/environment";
import ItemCreate from "./ItemCreate";
import ItemUpdate from "./ItemUpdate";
import ItemDelete from "./ItemDelete";

class ItemsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantryItem: {
        itemId: "",
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        importance: "",
        itemComments: "",
        isUsed: "",
        mealId: "",
        categoryId: "",
      },
    };
  }

  componentDidMount() {
    this.fetchPantryItems();
    // console.log("itemsHome did mount");
  }

  fetchPantryItems = () => {
    fetch(`${APIURL}item/viewItems`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((itemData) => {
        console.log(this.state.pantryItem);
        return this.setState({
          pantryItem: {
            itemId: this.state.itemId,
            itemName: this.state.itemName,
            itemDescription: this.state.itemDescription,
            itemPrice: this.state.itemPrice,
            importance: this.state.importance,
            itemComments: this.state.itemComments,
            isUsed: this.state.isUsed,
            mealId: this.state.mealId,
            categoryId: this.state.categoryId,
          },
        });
      });
  };

  pantryItemDelete = (event) => {
    fetch(`${APIURL}item/delete/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ pantryItem: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then((res) => this.fetchPantryItems());
  };
  render() {
    console.log("itemhome", this.props);
    return (
      <div className="mainItemHomeContainer">
        <h3>Pantry Item List</h3>
        <Router>
          <div className="itemButton">
            <Button className="navButtons">
              <Link to="/ItemCreate">
                <Button className="itemButton" id="itemCreateButton">
                  Create Item
                </Button>
              </Link>
            </Button>
          </div>
          <Table className="mainItemTable">
            <thead className="itemTableHeader">
              <tr className="itemTableRowHeaders">
                <th className="itemTableRowHead">Item Name</th>
                <th className="itemTableRowHead">Description</th>
                <th className="itemTableRowHead">Comments</th>
                <th className="itemTableRowHead">Importance</th>
                <th className="itemTableRowHead">Price</th>
                <th className="itemTableRowHead">Used</th>
                <th className="itemTableRowHead">Actions</th>
              </tr>
            </thead>
            <tbody className="itemTableBody">
              <tr>
                <th scope="row" className="itemDataCenter">
                  Bread
                </th>
                <td>French load</td>
                <td>from the bakery</td>
                <td>Required to complete a planned meal</td>
                <td className="itemDataCenter">$2.39</td>
                <td className="itemDataCenter">No</td>
                <td className="itemDataCenter">
                  <ButtonGroup className="navButtons">
                    <Link to="/ItemUpdate">
                      <Button className="itemButton" id="itemUpdateButton">
                        Update Item
                      </Button>
                    </Link>
                    <Link to="/ItemDelete">
                      <Button className="itemButton" id="itemDeleteButton">
                        Delete Item
                      </Button>
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <th scope="row" className="itemDataCenter">
                  Milk
                </th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td className="itemDataCenter">$1.89</td>
                <td className="itemDataCenter">Yes</td>
                <td className="itemDataCenter">
                  <ButtonGroup className="navButtons">
                    <Link to="/ItemUpdate">
                      <Button className="itemButton" id="itemUpdateButton">
                        Update Item
                      </Button>
                    </Link>
                    <Link to="/ItemDelete">
                      <Button className="itemButton" id="itemDeleteButton">
                        Delete Item
                      </Button>
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <th scope="row" className="itemDataCenter">
                  Milk
                </th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td className="itemDataCenter">$1.89</td>
                <td className="itemDataCenter">Yes</td>
                <td className="itemDataCenter">
                  <ButtonGroup className="navButtons">
                    <Link to="/ItemUpdate">
                      <Button className="itemButton" id="itemUpdateButton">
                        Update Item
                      </Button>
                    </Link>
                    <Link to="/ItemDelete">
                      <Button className="itemButton" id="itemDeleteButton">
                        Delete Item
                      </Button>
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <th scope="row" className="itemDataCenter">
                  Milk
                </th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td className="itemDataCenter">$1.89</td>
                <td className="itemDataCenter">Yes</td>
                <td className="itemDataCenter">
                  <ButtonGroup className="navButtons">
                    <Link to="/ItemUpdate">
                      <Button className="itemButton" id="itemUpdateButton">
                        Update Item
                      </Button>
                    </Link>
                    <Link to="/ItemDelete">
                      <Button className="itemButton" id="itemDeleteButton">
                        Delete Item
                      </Button>
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <th scope="row" className="itemDataCenter">
                  Milk
                </th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td className="itemDataCenter">$1.89</td>
                <td className="itemDataCenter">Yes</td>
                <td className="itemDataCenter">
                  <ButtonGroup className="navButtons">
                    <Link to="/ItemUpdate">
                      <Button className="itemButton" id="itemUpdateButton">
                        Update Item
                      </Button>
                    </Link>
                    <Link to="/ItemDelete">
                      <Button className="itemButton" id="itemDeleteButton">
                        Delete Item
                      </Button>
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>

              {/* <td>
                <Button
                  // id={pantryItem.id}
                  // onClick={e =>this.props.update(e, pantryItem)
                >
                  Add
                </Button>
                <Button
                  // id={pantryItems.id}
                  // onClick={e =>this.props.update(e, pantryItems)}
                >
                  Update
                </Button>
                <Button
                  // id={pantryItems.id}
                  // onClick={this.props.delete}
                  color="primary"
                >
                  Delete
                </Button>
              </td>
            </tr> */}
              {/* {this.props.pantryItems.map((pantryItems, id) => {
          return (
            <tr key={id}>
              <th scope="row">{pantryItems.id}</th>
              <td>{this.pantryItem.itemName}</td>
              <td>{this.pantryItem.itemDescription}</td>
              <td>{pantryItem.itemPrice}</td>
              <td>{pantryItem.Importance}</td>
              <td>{pantryItem.itemComments}</td>
              <td>{pantryItem.isUsed}</td>
              <td>{pantryItem.mealId}</td>
              <td>{pantryItem.categoryId}</td>
              <td>
                  <Button id={pantryItem.id} 
                  onClick={this.props.delete} 
                  color="danger">Delete</Button>
                  <Button id={pantryItems.id} 
                  onClick={e =>this.props.update(e, pantryItems)} 
                  color="warning">Update</Button>
              </td>
            </tr> */}
              {/* )
        })
        } */}
            </tbody>
          </Table>
          <Switch>
            <Route path="/ItemCreate" component={ItemCreate} />
            <Route path="/ItemUpdate" component={ItemUpdate} />
            <Route path="/ItemDelete" component={ItemDelete} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default ItemsHome;
