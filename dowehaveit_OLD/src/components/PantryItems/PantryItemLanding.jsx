import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PantryItemCreate from './PantryItemCreate';
import PantryItemDisplay from './PantryItemDisplay'
import APIURL from '../../helpers/environment';

class PantryItemIndex extends Component{
    constructor(props) {
        super(props)
        this.state = {
          pantryItems: []
        }
      }

      componentDidMount() {
        this.fetchPantryItems()
      }

      fetchPantryItems = () => {
        fetch(`${APIURL}item/viewItems`, {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
          .then((res) => res.json())
          .then((itemData) => {
            console.log(itemData)
            return this.setState({ pantryItems: itemData })
          })
      }
      pantryItemDelete = (event) => {
        fetch(`${APIURL}item/delete/${event.target.id}`, {
          method: 'DELETE',
          body: JSON.stringify({ pantryItem: { id: event.target.id } }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => this.fetchPantryItems())
      }

      render() {
        const pantryItems = this.state.pantryItems.length >= 1 ?
        <PantryItemDisplay pantryItems={this.state.pantryItems}
         delete={this.pantryItemDelete} update={this.setUpdatedPantryItem} /> : <h2>Log an item to see table</h2>
        return (
          <Container>
            <Row>
              <Col md="3">
              <PantryItemCreate sessionToken={this.props.token} updatePantryItemsArray={this.fetchPantryItems}/>
              </Col>
              <Col md="9">
                {pantryItems}
              </Col>
            </Row>
          </Container>
        )
      }
    }

export default PantryItemIndex;