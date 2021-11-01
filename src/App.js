import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes.js';
import Menu from './components/MenuComponent.js';
import './App.css';
import { COMMENTS } from './shared/comment.js';
//import { render } from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}  cooments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
