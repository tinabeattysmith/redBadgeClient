import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardGroup,
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <CardDeck className="main-container">
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>Monday</CardTitle>
              <CardText>Meal for Monday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Tuesday</CardTitle>
              <CardText>Meal for Tuesday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Wednesday</CardTitle>
              <CardText>Meal for Wednesday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Thursday</CardTitle>
              <CardText>Meal for Thursday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Friday</CardTitle>
              <CardText>Meal for Friday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>Saturday</CardTitle>
              <CardText>Meal for Saturday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Sunday</CardTitle>
              <CardText>Meal for Sunday</CardText>
              <Button>Link to Meal</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </CardDeck>
    );
  }
}

export default Home;
