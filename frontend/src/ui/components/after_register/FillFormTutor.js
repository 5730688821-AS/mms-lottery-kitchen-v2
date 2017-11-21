import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';

export default class FillFormTutor extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
            <div>
                 <hr/>
                 <b>ส่วนที่ 3: ข้อมูลเพิ่มเติมสำหรับผู้สอน</b>
                 <br />
                 <br />
                 <Row>
                     <Col xs ='4'>
                         ชื่อสถานศึกษา*<Input value={this.props.state.university_th} onChange={this.props.handleState} type="text" name="university_th" id="university_th" placeholder="ภาษาไทย" />
                         <Input value={this.props.state.university_en} onChange={this.props.handleState} type="text" name="university_en" id="university_en" placeholder="ภาษาอังกฤษ" />
                     </Col>
                     <Col xs ='4'>
                         คณะ/สังกัด*<Input value={this.props.state.faculty_th} onChange={this.props.handleState} type="text" name="faculty_th" id="faculty_th" placeholder="ภาษาไทย" />
                         <Input value={this.props.state.faculty_en} onChange={this.props.handleState} type="text" name="faculty_en" id="faculty_en" placeholder="ภาษาอังกฤษ" />
                     </Col>
                     <Col xs ='4'>
                         ภาควิชา/สาขา*<Input value={this.props.state.department_th} onChange={this.props.handleState} type="text" name="department_th" id="department_th" placeholder="ภาษาไทย" />
                         <Input value={this.props.state.department_en} onChange={this.props.handleState} type="text" name="department_en" id="department_en" placeholder="ภาษาอังกฤษ" />
                     </Col>
                 </Row>
                 <br />
                 <Row>
                     <Col xs ='1'>
                         ชั้นปี*<Input value={this.props.state.year} onChange={this.props.handleState} type="number" name="year" id="year" placeholder="เลข" />
                     </Col>
                     <Col xs ='3'>
                         จังหวัด*<Input value={this.props.state.province} onChange={this.props.handleState} type="datetime" name="province" id="province" placeholder="ex. กรุงเทพฯ" />
                     </Col>
                 </Row>
            </div>
          )
    }
}