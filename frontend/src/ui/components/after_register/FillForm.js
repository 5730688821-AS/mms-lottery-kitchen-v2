import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';

import FillFormTutor from './FillFormTutor';
import FillFormLearner from './FillFormLearner';

export default class FillForm extends Component{
    constructor(){
        super();
        this.state = {
            name_th: '',
            name_en: '',
            sname_th: '',
            sname_en: '',
            nickname: '',
            birthdate: '',
            gender: '',
            email: '',
            tel: '',
            fb: '',
            line: '',
            school_th: '',
            school_en: '',
            university_th: '',
            university_en: '',
            faculty_th: '',
            faculty_en: '',
            department_th: '',
            department_en: '',
            year_tutor: '',
            year_learner: '',
            province: '',
        }
        this.handleState=this.handleState.bind(this);
    }

    //HANDLER

    handleState(e){
        switch(e.target.id){
            case 'name_th': this.setState({name_th: e.target.value}); break;
            case 'name_en': this.setState({name_en: e.target.value}); break;
            case 'sname_th': this.setState({sname_th: e.target.value}); break;
            case 'sname_en': this.setState({sname_en: e.target.value}); break;
            case 'nickname': this.setState({nickname: e.target.value}); break;
            case 'birthdate': this.setState({birthdate: e.target.value}); break;
            case 'gender': this.setState({gender: e.target.value}); break;
            case 'email': this.setState({email: e.target.value}); break;
            case 'tel': this.setState({tel: e.target.value}); break;
            case 'fb': this.setState({fb: e.target.value}); break;
            case 'line': this.setState({line: e.target.value}); break;
            case 'school_th': this.setState({school_th: e.target.value}); break;
            case 'school_en': this.setState({school_en: e.target.value}); break;
            case 'university_th': this.setState({university_th: e.target.value}); break;
            case 'university_en': this.setState({university_en: e.target.value}); break;
            case 'faculty_th': this.setState({faculty_th: e.target.value}); break;
            case 'faculty_en': this.setState({faculty_en: e.target.value}); break;
            case 'department_th': this.setState({department_th: e.target.value}); break;
            case 'department_en': this.setState({department_en: e.target.value}); break;
            case 'year_tutor': this.setState({year_tutor: e.target.value}); break;
            case 'year_learner': this.setState({year_learner: e.target.value}); break;
            case 'province': this.setState({province: e.target.value}); break;
            default: return;
        }
    }

    render(){
        console.log(this.state)
        return(
            <Container>
                <br />
                <center><h4>ขั้นตอนที่ 3: กรุณากรอกรายละเอียดบัญชี</h4></center>
                <br />
                <FormGroup>
                    <hr/>
                    <b>ส่วนที่ 1: ข้อมูลทั่วไป</b>
                    <br />
                    <br />
                    <Row>
                        <Col xs ='6'>
                            ชื่อ*<Input value={this.state.name_th} onChange={this.handleState} type="text" name="name_th" id="name_th" placeholder="ภาษาไทย" />
                            <Input value={this.state.name_en} onChange={this.handleState} type="text" name="name_en" id="name_en" placeholder="ภาษาอังกฤษ" />
                        </Col>
                        <Col xs ='6'>
                            นามสกุล*<Input value={this.state.sname_th} onChange={this.handleState} type="text" name="sname_th" id="sname_th" placeholder="ภาษาไทย" />
                            <Input value={this.state.sname_en} onChange={this.handleState} type="text" name="sname_en" id="sname_en" placeholder="ภาษาอังกฤษ" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs ='4'>
                            ชื่อเล่น*<Input value={this.state.nickname} onChange={this.handleState} type="text" name="nickname" id="nickname" placeholder="ชื่อเล่นของคุณ" />
                        </Col>
                        <Col xs ='4'>
                            วันเกิด<Input value={this.state.birthdate} onChange={this.handleState} type="datetime" name="birthdate" id="birthdate" placeholder="วว/ดด/ปปปป (พ.ศ.)" />
                        </Col>
                        <Col xs ='2'>
                            เพศ<Input value={this.state.gender} onChange={this.handleState} type="select" name="gender" id="gender">
                                <option>ชาย</option>
                                <option>หญิง</option>
                                <option>ไม่ระบุ</option>
                            </Input>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <hr/>
                    <b>ส่วนที่ 2: ข้อมูลการติดต่อ</b>
                    <br />
                    <br />
                    <Row>
                        <Col xs ='4'>
                            อีเมลล์*<Input value={this.state.email} onChange={this.handleState} type="text" name="email" id="email" placeholder="สามารถใช้ เหมือน/ต่าง กับบัญชีผู้ใช้ได้" />
                        </Col>
                        <Col xs ='3'>
                            หมายเลขโทรศัพท์*<Input value={this.state.tel} onChange={this.handleState} type="text" name="tel" id="tel" placeholder="ใส่โดยไม่ต้องมีขีด" />
                        </Col>
                        <Col xs ='3'>
                            Link Facebook<Input value={this.state.fb} onChange={this.handleState} type="text" name="fb" id="fb" placeholder="fb.com/yourfb (ไม่จำเป็น)" />
                        </Col>
                        <Col xs ='2'>
                            LINE ID<Input value={this.state.line} onChange={this.handleState} type="text" name="line" id="line" placeholder="@lineid (ไม่จำเป็น)" />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    { this.props.userType === 'tutor' ? <FillFormTutor state={this.state} handleState={this.handleState} /> :<FillFormLearner state={this.state} handleState={this.handleState} /> }
                    <br />
                    <br />
                    <br />
                    <Row>             
                    <Col xs = '4'/>
                    <Col xs = '4'>
                        <Col xs = '12'>
                        <center>
                        <Label check>
                            <Input type="checkbox" checked disabled/>{' '}{' '}
                            ยอมรับข้อกำหนดการให้บริการ
                            </Label>
                        </center>
                        </Col>
                        <br />
                        <Col xs = '12'>
                            <center><Button size='lg' outline color="success">&nbsp;&nbsp;สมัครใช้บริการ&nbsp;&nbsp;</Button></center>
                        </Col> 
                    </Col>
                    <Col xs = '4'/> 
                </Row>
                </FormGroup>
            </Container>
          )
    }
}