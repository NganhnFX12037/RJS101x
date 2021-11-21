import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffList ({staff, onClick}){
    return (
        <Card>
            <Link to={`/staffList/${staff.id}`}>
            <CardImg width="100%" src={staff.image} />
            <CardTitle>{staff.name}</CardTitle>
            </Link>
        </Card>
    );
}

const StaffList = (props)=>{

        const staffList = props.staffs.map((staff) => {
            return (
             < div in key={staff.id} className="col-12 col-sm-6 col-md-4 mt-3" >
                <RenderStaffList staff={staff} onClick={props.onClick}/>
            </div>
              );
              
        });
        return (
            <div className="container"> 
                <div className="row">
                {staffList}
                </div>
            </div>
            
            );
    }


export default  StaffList;
