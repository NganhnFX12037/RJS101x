import React, { Component } from 'react';
//import dateFormat from 'dateformat'; 
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
            <div>
                <h4>Họ và tên: {this.props.staff.name}</h4>
                <p>Ngày sinh: {this.props.dateFomat(staff.doB, "dd/mm/yyyy" )} </p>
                <p>Ngày vào công ty: {this.props.dateFomat(staff.startDate,"dd/mm/yyyy")}</p>
                <p>Phòng ban: {this.props.staff.department.name}</p>
                <p>Số ngày nghỉ còn lại: {this.props.staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {this.props.staff.overTime}</p>

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
             <div in key={staff.id} >
                    <button onClick={() => this.onStaffSelect(staff)}>
                     {this.props.staff.name}
                    </button>
            </div>
              );
              
        })
        return (
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div div className="row">
                  <div  className="col-12 col-md-6 mt-1" >
                    {this.renderStaff(this.state.selectedStaff)}
                  </div>
                </div>
            </div>
            
            );
    }
}

export default  StaffList;
