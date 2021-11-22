import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
function RenderStaffList ({staff, onClick}){
    return (
        <Card>
            <Link to={`/staffList/${staff.id}`}>
            <CardImg width="100%" src={staff.image} />
            <CardTitle className="text-center p-1">{staff.name}</CardTitle>
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
        function handleSearchTermChange(e) {
            setSearchTerm(e.target.value);
            if(!onSubmit) return;
            const formValues = {
                searchTerm: e.target.value,
            };
            onSubmit(formValues);
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
                <div className="col-sm-12 col-md-8">
                    <h2>Danh sách nhân viên</h2>
                </div>
                <div className="col-md-4 mt-2  ">
                    <input 
                    type="text" 
                    placeholder="Nhập tên cần tìm kiếm" 
                    className="prompt" 
                    value={searchTerm} 
                    onChange={handleSearchTermChange}
                    />
                    <i className="fa fa-search ml-2" arian-hidden="false"></i>
                </div>
            </div>
                <div className="row">
                {staffList}
                </div>
            </div>
            
            );
    }


export default  StaffList;
