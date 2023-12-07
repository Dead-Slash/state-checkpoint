import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "./4758008.jpg";

class App extends Component {
  state = {
    Person: {
      fullName: "Marwen Ben Romdhane",
      bio: "He is a great weed smoker always being high",
      imgSrc: img,
      profession: "Weed Dealer  CEO at WEED-MASTER-Corp ",
    },
    show: false,
    timer: 0,
  };

  toggleVisibility = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount = () => {
    console.log("run componentDidMount");
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <h1>Check-point State</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.show === true ? "Hide" : "Show"} profile
        </button>
        <h2>timer: {this.state.timer}</h2>
        {/* {this.state.isVisisble === true ? <Counter /> : ''} */}
        {this.state.show && (
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.Person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.Person.fullName}</Card.Title>
              <Card.Text>{this.state.Person.bio}</Card.Text>
              <Card.Text>{this.state.Person.profession}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default App;
