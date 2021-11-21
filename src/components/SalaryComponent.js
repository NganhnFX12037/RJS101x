import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

function RenderSalary ({staff}){

    return (
        <div>
            <div class="list-group-item list-group-item col-12 ">
            <h4>Họ và tên: {staff.name}</h4>
            <p>Mã nhân viên: {staff.id}</p>
            <p>Hệ số lương: {staff.salaryScale}</p>
            <p>Số giờ làm thêm: {staff.overTime}</p>
            <div class="card bg-info text-white">
            <div class="card-body">Lương: {(3000000*parseInt(staff.salaryScale,10)+staff.overTime*200000)}</div>
            </div>
            </div>
        </div>
    );
}

const Salary = (props)=>{

        const staffSalaryList = props.staffs.map((staff) => {
            return (
             < div in key={staff.id} className="col-12 col-sm-6 col-md-4 mt-3" >
                <RenderSalary staff={staff}/>
            </div>
              );
              
        });
        return (
            <div className="container"> 
                <div className="row">
                {staffSalaryList}
                </div>
            </div>
            
            );
    }


export default  Salary;
