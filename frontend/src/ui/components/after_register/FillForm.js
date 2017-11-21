import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';

import FillFormTutor from './FillFormTutor';
import FillFormLearner from './FillFormLearner';

export default class FillForm extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
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
                            ชื่อ*<Input type="text" name="name_th" id="name_th" placeholder="ภาษาไทย" />
                            <Input type="text" name="name_en" id="name_en" placeholder="ภาษาอังกฤษ" />
                        </Col>
                        <Col xs ='6'>
                            นามสกุล*<Input type="text" name="sname_th" id="sname_th" placeholder="ภาษาไทย" />
                            <Input type="text" name="sname_en" id="sname_en" placeholder="ภาษาอังกฤษ" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs ='4'>
                            ชื่อเล่น*<Input type="text" name="nickname" id="nickname" placeholder="ชื่อเล่นของคุณ" />
                        </Col>
                        <Col xs ='4'>
                            วันเกิด<Input type="datetime" name="birthdate" id="birthdate" placeholder="วว/ดด/ปปปป (พ.ศ.)" />
                        </Col>
                        <Col xs ='2'>
                            เพศ<Input type="select" name="gender" id="gender">
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
                            อีเมลล์*<Input type="text" name="email" id="email" placeholder="สามารถใช้ เหมือน/ต่าง กับบัญชีผู้ใช้ได้" />
                        </Col>
                        <Col xs ='3'>
                            หมายเลขโทรศัพท์*<Input type="text" name="tel" id="tel" placeholder="ใส่โดยไม่ต้องมีขีด" />
                        </Col>
                        <Col xs ='3'>
                            Link Facebook<Input type="text" name="tel" id="tel" placeholder="fb.com/yourfb (ไม่จำเป็น)" />
                        </Col>
                        <Col xs ='2'>
                            LINE ID<Input type="text" name="line" id="line" placeholder="@lineid (ไม่จำเป็น)" />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    { this.props.userType === 'tutor' ? <FillFormTutor /> :<FillFormLearner/> }
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