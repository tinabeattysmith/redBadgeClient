import React, { Component } from "react";
import { Table, Button, ButtonGroup } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  LinkProps,
} from "react-router-dom";
import "./ItemsHome.css";
import ItemCreate from "./ItemCreate";
import ItemUpdate from "./ItemUpdate";
import ItemDelete from "./ItemDelete";

class ItemsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantryItems: [{}],
    };
  }

  componentDidMount() {
    this.fetchPantryItems();
  }

  fetchPantryItems = () => {
    fetch(`http://localhost:3000/item/viewItems`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((itemData) => {
        console.log(itemData);
        return this.setState({ pantryItems: itemData });
      });
  };

  pantryItemDelete = (event) => {
    fetch(`http://localhost:3000/item/delete/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ pantryItems: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then((res) => this.fetchPantryItems());
  };
  render() {
    return (
      <div className="mainItemHomeContainer">
        <Router>
          <div className="itemButtons">
            <ButtonGroup className="navButtons">
              <Link to="/ItemCreate">
                <Button className="itemButton" id="itemCreateButton">
                  Create Item
                </Button>
              </Link>
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
              </tr>
            </thead>
            <tbody className="itemTableBody">
              <tr>
                <th scope="row">Bread</th>
                <td>French load</td>
                <td>from the bakery</td>
                <td>Required to complete a planned meal</td>
                <td>$2.39</td>
                <td>No</td>
              </tr>
              <tr>
                <th scope="row">Milk</th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td>$1.89</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Milk</th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td>$1.89</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Milk</th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td>$1.89</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Milk</th>
                <td>gallon 1% white</td>
                <td>kroger</td>
                <td>Always need to have on hand</td>
                <td>$1.89</td>
                <td>Yes</td>
              </tr>

              {/* <td>
                <Button
                  // id={pantryItems.id}
                  // onClick={e =>this.props.update(e, pantryItems)}
                  color="primary"
                >
                  Add
                </Button>
                <Button
                  // id={pantryItems.id}
                  // onClick={e =>this.props.update(e, pantryItems)}
                  color="primary"
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
              <td>{this.pantryItems.itemName}</td>
              <td>{this.pantryItems.itemDescription}</td>
              <td>{pantryItems.itemPrice}</td>
              <td>{pantryItems.Importance}</td>
              <td>{pantryItems.itemComments}</td>
              <td>{pantryItems.isUsed}</td>
              <td>{pantryItems.mealId}</td>
              <td>{pantryItems.categoryId}</td>
              <td>
                  <Button id={pantryItems.id} 
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
