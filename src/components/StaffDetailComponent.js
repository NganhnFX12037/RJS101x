import React from 'react';
import dateFormat from 'dateformat'; 
import { baseUrl } from '../shared/baseUrl';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaff(staff) {
    if (staff !=null)
    return (
        <div>
            <img width="100%" src={staff.image} alt={staff.name} />  
        
                <h4> Họ và tên:</h4>
                <p> Ngày sinh: { dateFormat(staff.doB, "dd/mm/yyyy" )} </p>
                <p> Ngày vào công ty: { dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                <p> Phòng ban: {staff.department}</p>
                <p> Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p> Số ngày đã làm thêm: {staff.overTime}</p>

        
        </div>
    );
    else
    return(
        <div></div>
    );

}


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
             <RenderStaff staff={props.staff} />
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
