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
     <div className="container">
     <div className="row">
         <Breadcrumb>

             <BreadcrumbItem><Link to="/staffList">Nhân Viên</Link></BreadcrumbItem>
             <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
         </Breadcrumb>
         < div className="col-12 col-md-5 m-1">
         <img width="100%" src={props.staff.image} alt={props.staff.name} />  
        
        <h4> Họ và tên:</h4>
        <p> Ngày sinh: { dateFormat(props.staff.doB, "dd/mm/yyyy" )} </p>
        <p> Ngày vào công ty: { dateFormat(props.staff.startDate,"dd/mm/yyyy")}</p>
        <p> Phòng ban: {props.staff.department}</p>
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