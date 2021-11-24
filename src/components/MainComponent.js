import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DEPARTMENTS } from '../shared/staffs.js';
import {STAFFS} from '../shared/staffs.js';
import StaffDetail from './StaffDetailComponent';
import StaffList from './StaffList.js';
import DepartmentsList from './DepartmentComponent';
import Salary from './SalaryComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import * from 'lodash'

  constructor(props) {
    super(props);

    this.state = {
         staffs : STAFFS,
         departments : DEPARTMENTS,
         searchName :"",
         searchResults: []

    };
  }

  render() {


    const StaffWithId = ({match}) => {
      return(
        <div>
          <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
        </div>
      );
    };
    const searchHandler = (getSearchName) => {
      console.log('new filters', getSearchName);
      
      
    };
    return (
      <div>
        <Header/>
<Switch>
  <Route exact path="/staffList" component={()=><StaffList staffs={this.state.staffs} 
  onSubmit={searchHandler}/>} 
  />
  <Route  path='/staffList/:staffId' component={StaffWithId} />
  <Route exact path="/department" component={()=> <DepartmentsList departments={this.state.departments}/>} />
  <Route exact path="/salary" component={()=><Salary staffs={this.state.staffs}/>} />
  <Redirect to="/staffList" />
</Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;