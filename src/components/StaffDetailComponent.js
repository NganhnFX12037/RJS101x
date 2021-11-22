import React from 'react';
import dateFormat from 'dateformat'; 
import { baseUrl } from '../shared/baseUrl';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const StaffDetail = (props) => {
    if (props.staff != null)        
    return (
    <div>
            
                <Breadcrumb className="bg-white"  >
                    <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
                
                <div div className="row p-3">
                <div className="col-12 col-sm-4 col-md-3" >
                <img   width="100%" src={props.staff.image} alt={props.staff.name}/>  
                </div>
                <div className="col-12 col-sm-9 col-md-8 mb-3" >
                <h4> Họ và tên: {props.staff.name}</h4>
                <p> Ngày sinh: { dateFormat(props.staff.doB, "dd/mm/yyyy" )} </p>
                <p> Ngày vào công ty: { dateFormat(props.staff.startDate,"dd/mm/yyyy")}</p>
                <p> Phòng ban: {props.staff.department.name}</p>
                <p> Số ngày nghỉ còn lại: {props.staff.annualLeave}</p>
                <p> Số ngày đã làm thêm: {props.staff.overTime}</p>
            </div>
            </div>
    
    </div>   
 );
     else
         return(
             <div></div>
         );
 }

 export default StaffDetail;