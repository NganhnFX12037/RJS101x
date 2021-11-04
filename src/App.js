import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffList.js';
import {STAFFS} from './shared/staffs.js';
import './App.css';
//import { render } from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    staffs : STAFFS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand className="h2" href="/">Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs}/>
      </div>
    );
  }
}

export default App;
