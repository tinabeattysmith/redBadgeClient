import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class PantryItemIndex extends Component{
    constructor(props) {
        super(props)
        this.state = {
          pantryItems: []
        }
      }

      componentWillMount() {
        this.fetchPantryItems()
      }

      fetchPantryItems = () => {
        fetch("http://localhost:3000/item/viewItems", {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
          .then((res) => res.json())
          .then((itemData) => {
            return this.setState({ pantryItems: itemData })
          })
      }

      render() {
        return (
          <Container>
            <Row>
              <Col md="3">
                {/* the create component will go here*/}
              </Col>
              <Col md="9">
                <h2>Add an item to see table - this will be added in the upcoming modules</h2>
              </Col>
            </Row>
          </Container>
        )
      }
    }

export default PantryItemIndex;