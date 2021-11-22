import React, { Component } from 'react';
import { DEPARTMENTS } from '../shared/staffs';

function RenderDepartment ({department}){

    return (
        
            <div className="list-group-item list-group-item " style={{border: '1px solid #512DA8'}}>
        
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
             < div  key={department.id} className="col-12 col-sm-6 col-md-4 p-2" >
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