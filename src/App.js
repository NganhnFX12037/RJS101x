import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes.js';
import Menu from './components/MenuComponent.js';
import './App.css';
import Main from './components/MainComponent';
import { COMMENTS } from './shared/comment.js';
//import { render } from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Main/>
      </div>
    );
  }
}

export default App;
