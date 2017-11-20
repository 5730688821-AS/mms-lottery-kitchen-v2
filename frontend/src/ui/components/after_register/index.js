import React, { PropTypes, Component } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button, Alert, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import TopComponent from '../TopComponent';
import axios from 'axios';
import './style.css';
import bookshelf from '../../materials/bookshelf.jpg';
import tutor from '../../materials/tutor.jpg';
import learner from '../../materials/learner.jpg';

import { Link } from 'react-router-dom'

export default class AfterRegister extends Component {
  render() {
    return (
      <div className="AfterRegister">
      <Alert color="success">
        Success - การสร้างบัญชีสำเร็จ!
      </Alert>
        <div className="AfterRegister-Middle">
        <Container>
          <Row>
          </Row>
          <br />
          <Row>
          <Col xs = '8'>
          <h3>โปรดเลือกประเภทบัญชีผู้ใช้</h3>
          <br />
          <Row>
          <Col xs = '5'>
          <Card>
            <CardImg top height='180px' width="100%" src={tutor} alt="Card image cap" />
            <CardBody>
              <br /> 
              <center><Button outline color="success">สมัครเป็นติวเตอร์</Button></center>
              <br />
            </CardBody>
          </Card>
          <Col xs = '2'>
          </Col>
          </Col>
          <Col xs = '5'>
          <Card>
            <CardImg top height='180px' width="100%" src={learner} alt="Card image cap" />
            <CardBody>
              <br /> 
              <center><Button outline color="primary">สมัครเป็นผู้เรียน</Button></center>
              <br />
            </CardBody>
          </Card>
          </Col>
          </Row>
          </Col>
          <Col xs = '4'>
            <FormGroup>
              <h4> กรุณากรอกรายละเอียดบัญชี </h4>
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
          </Col>
          </Row>
        </Container>
        </div>
        <div className="Bottom">
        </div>
      </div>
    )
  }
}