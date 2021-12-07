import React, { useState, useRef } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
function RenderStaffList ({staff, onClick}){
    return (
        <Card>
            <Link to={`/staffList/${staff.id}`}>
            <CardImg width="100%" src={staff.image} />
            <CardTitle className="text-center text-dark p-1">{staff.name}</CardTitle>
            </Link>
        </Card>
    );
}

    
const StaffList = (props)=>{
    StaffList.propTypes ={
        onSubmit: PropTypes.func,
    };
    StaffList.defaultProps ={
        onSubmit: null,
    };
        
        const { onSubmit} = props;
        const [searchTerm, setSearchTerm] = useState("");
        const typingTimeoutRef = useRef(null);

        function handleSearchTermChange(e) {
            const value =e.target.value;
            setSearchTerm(e.target.value);
            if(!onSubmit) return;
            //set --100 -- Clear, set --500--> Submit
            if(typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            typingTimeoutRef.current = setTimeout(()=> {
                const formValues = {
                    searchTerm: value,
                };
                onSubmit(formValues);
            }, 500);
                
             }
            

        const staffList = props.staffs.map((staff) => {
            return (
             < div in key={staff.id} className="col-12 col-sm-4 col-md-2 p-2" >
                <div className="rounded" >
                <RenderStaffList staff={staff} onClick={props.onClick}/>
            </div>
                </div>
              );
              
        });
        
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <h2>Danh sách nhân viên</h2>
                </div>
              
            </div>
                <div className="row">
                {staffList}
                </div>
            </div>
            
            );
    }


export default  StaffList;
