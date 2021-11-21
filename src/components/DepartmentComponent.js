import React, { Component } from 'react';
import { DEPARTMENTS } from '../shared/staffs';

function RenderDepartment ({department}){

    return (
        
            <div class="list-group-item list-group-item col-12 ">
        
                <h4>{department.name}</h4>
                <ul className="list-unstyled">
                <li >
                Số lượng nhân viên: {department.numberOfStaff}
                </li>
                </ul>
            </div>
            
        
    );
}

const DepartmentsList = (props)=>{

        const departmentsList = props.departments.map((department) => {
            return (
             < div  key={department.id} className="col-12 col-sm-6 col-md-4 mt-3" >
                <RenderDepartment department={department}/>
            </div>
              );
              
        });
        return (
            <div className="container"> 
                <div className="row">
                {departmentsList}
                </div>
            </div>
            
            );
    }


export default  DepartmentsList;