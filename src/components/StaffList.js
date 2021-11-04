import React, { Component } from 'react';
import dateFormat from 'dateformat'; 
class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
        }
    }

    onStaffSelect(staff) {

        this.setState({ 
            selectedStaff: staff,

        });
    }
    renderStaff(staff) {

        if (staff != null)
        return(
            <div class="list-group-item list-group-item col-12 col-sm-6 col-md-4 mt-3">
                <h4>Họ và tên: {staff.name}</h4>
                <p>Ngày sinh: { dateFormat(staff.doB, "dd/mm/yyyy" )} </p>
                <p>Ngày vào công ty: { dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>

            </div>
        );
    else
  
        return(
            <div>
            <p>Bấm vào tên nhân viên để xem thông tin. </p>
            </div>
        );
}

    render() {
        const staffList = this.props.staffs.map((staff) => {
            return (
             < div in key={staff.id} onClick={() => this.onStaffSelect(staff)} 
             className="col-12 col-sm-6 col-md-4 mt-2" 
             >
            <li class="list-group-item list-group-item-success">{staff.name}
            </li>
                     
            </div>
              );
              
        })
        return (
            <div className="container">
                <div class="row">
                    {staffList}
            
                </div>
                  <div >
                    {this.renderStaff(this.state.selectedStaff)}
            
                  </div>
                </div>
            
            );
    }
}

export default  StaffList;
