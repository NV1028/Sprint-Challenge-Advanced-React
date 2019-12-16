import React from "react";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
// import { Link } from "react-router-dom";

import "./index.css";

class App extends React.Component {
  state = {
    doggos: [],
    doggoText: ""
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        console.log(
          "bk: index.js: App: componentDidMount: fetch: then: res: ",
          res
        );
        this.setState({
          doggos: res
          
        });
        console.log(res);
      })
      .catch(err => {
        console.log(
          "bk: index.js: App: componentDidMount: fetch: catch: err: ",
          err
        );
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <h1>hello gitters!</h1> */}
        <div class="header">
                {/* <img src="./assets/lambdalogo.png" alt="Lambda Logo" /> */}
                <p class="header">I</p>
                <p class="header">❤️</p>
                <p class="header">SOCCER</p>
                <br></br>
                <br></br>

                {/* <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" /> */}
              </div>
        <div className="doggos">
          {this.state.doggos.map(name => (
            <div>
             
              <Card>
                <CardImg
                  top
                  width="20%"
                  src="https://images.unsplash.com/photo-1554728667-662368ae729a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{name.name}</CardTitle>
                  {/* <a href={name.html_url}>{name.html_url}</a> */}
                  <CardText>
                  {name.country}
                  </CardText>
                  <CardText>Number of Searches: 
                  {name.searches}
                  </CardText>
                  {/* <Button>Button</Button> */}
                  <br></br>
                  <br></br>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
