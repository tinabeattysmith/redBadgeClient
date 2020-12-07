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
import "./Home.css";
// import components

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainHomeContainer">
        <div className="titleContainer">
          <h1>Welcome to Do We Have It? </h1>
        </div>

        <div className="subtitleContainer">
          <h3> Weekly Menu </h3>
        </div>

        <CardDeck className="mainCardDeck">
          <CardGroup className="weekdayCards">
            <Card className="weekdayCard">
              <CardBody className="weekdayCardBody">
                <CardTitle className="cardTitle">Monday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake red leicester edam camembert de
                    normandie when the cheese comes out everybody's happy cheese
                    and wine dolcelatte.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
            <Card className="weekdayCard">
              <CardBody className="weekdayCardBody">
                <CardTitle className="cardTitle">Tuesday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
            <Card className="weekdayCard">
              <CardBody className="weekdayCardBody">
                <CardTitle className="cardTitle">Wednesday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
            <Card className="weekdayCard">
              <CardBody className="weekdayCardBody">
                <CardTitle className="cardTitle">Thursday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
            <Card className="weekdayCard">
              <CardBody className="weekdayCardBody">
                <CardTitle className="cardTitle">Friday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup className="weekendCards">
            <Card className="weekendCard">
              <CardBody className="weekendCardBody">
                <CardTitle className="cardTitle">Saturday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
            <Card className="weekendCard">
              <CardBody className="weekendCardBody">
                <CardTitle className="cardTitle">Sunday</CardTitle>
                <CardText className="cardText">
                  <p>
                    I love cheese, especially gouda camembert de normandie. St.
                    agur blue cheese cheesecake.
                  </p>
                </CardText>
                {/* <Button>Link to Meal</Button> */}
              </CardBody>
            </Card>
          </CardGroup>
        </CardDeck>
      </div>
    );
  }
}

export default Home;
