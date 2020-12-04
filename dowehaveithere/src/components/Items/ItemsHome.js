import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./ItemsHome.css";
// import ItemCreate from './ItemCreate';

class ItemsHome extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pantryItems: [{}]
  //   }
  // }

  // componentDidMount() {
  //   this.fetchPantryItems()
  // }

  // fetchPantryItems = () => {
  //   fetch(`http://localhost:3000/item/viewItems`, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': this.props.token
  //     })
  //   })
  //     .then((res) => res.json())
  //     .then((itemData) => {
  //       console.log(itemData)
  //       return this.setState({ pantryItems: itemData })
  //     })
  // }

  // pantryItemDelete = (event) => {
  //   fetch(`http://localhost:3000/item/delete/${event.target.id}`, {
  //     method: 'DELETE',
  //     body: JSON.stringify({ pantryItems: { id: event.target.id } }),
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': this.props.token
  //     })
  //   })
  //   .then((res) => this.fetchPantryItems())
  // }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Comments</th>
            <th>Importance</th>
            <th>Price</th>
            <th>Used</th>
          </tr>
        </thead>
        <tbody>
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
          <tr className="itemButtons">
            <td>
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
          </tr>
          {/* {this.props.pantryItems.map((pantryItems, id) => {
          return (
            <tr key={id}>
              <th scope="row">{pantryItems.id}</th>
              <td>{pantryItems.itemName}</td>
              <td>{pantryItems.itemDescription}</td>
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
    );
  }
}

export default ItemsHome;
