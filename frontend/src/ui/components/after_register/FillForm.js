import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';

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
                    <br />
                    <b>ข้อมูลทั่วไป</b>
                    <br />
                    <Row>
                        <Col xs ='6'>
                            ชื่อ<Input type="text" name="email" id="id" placeholder="ภาษาไทย" />
                            <Input type="text" name="email" id="id" placeholder="ภาษาอังกฤษ" />
                        </Col>
                        <Col xs ='6'>
                            นามสกุล<Input type="text" name="email" id="id" placeholder="ภาษาไทย" />
                            <Input type="text" name="email" id="id" placeholder="ภาษาอังกฤษ" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs ='8'>
                            วันเกิด<Input type="datetime" name="datetime" id="exampleDatetime" placeholder="วว/ดด/ปปปป (พ.ศ.)" />
                        </Col>
                        <Col xs ='4'>
                            เพศ<Input type="select" name="gender" id="gender">
                                <option>ชาย</option>
                                <option>หญิง</option>
                                <option>ไม่ระบุ</option>
                            </Input>
                        </Col>
                    </Row>
                <br />
                <Row>
                <Col xs = '8'>
                  <Label check>
                    <Input type="checkbox" checked disabled/>{' '}{' '}
                      ยอมรับข้อกำหนดการให้บริการ
                    </Label>
                </Col>
                <Col xs = '4'>
                  <Button outline color="primary">&nbsp;&nbsp;&nbsp;สมัคร&nbsp;&nbsp;&nbsp;</Button>
                </Col> 
              </Row>
            
            </FormGroup>
            </Container>
          )
    }
}