import React, { PropTypes, Component } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button } from 'reactstrap';
import TopComponent from '../TopComponent';
import axios from 'axios';
import './style.css';
import bookshelf from '../../materials/bookshelf.jpg';

import { Link } from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <div>
        <TopComponent />
        <div className="Register">
          <div className="Register-Middle">
          <Container>
            <Row>
              <h1>ลงทะเบียนบัญชีผู้ใช้ใหม่</h1>
            </Row>
            <br />
            <Row>
            <Col xs = '8'>
            <h3>ข้อกำหนดในการให้บริการจับคู่ติวเตอร์ TutorS</h3>
            <br />
            <b>ข้อกำหนดการให้บริการเหล่านี้ จะมีผลบังคับใช้กับการใช้งานหน้าเว็บ TutorS ของคุณ</b><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- โปรดอ่านการปรับปรุงแก้ไขเป็นประจำ <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- การใช้หน้าเว็บ TuTorS ของคุณหมายถึงคุณได้ยอมรับข้อกำหนดในการให้บริการของหน้าเว็บ TuTorS <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- การใช้หน้าเว็บ TuTorS ของคุณอย่างต่อเนื่องหมายความว่าคุณยอมรับในการปรับปรุงแก้ไขที่เกิดขึ้น <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ถ้าคุณไม่ประสงค์ที่จะยอมรับข้อกำหนดของหน้าเว็บ TuTorS โปรดอย่าใช้หน้าเว็บ TuTorS <br/>
            <br/>
            <br/>
            <center><Button>อ่านข้อกำหนดการให้บริการของระบบได้ที่นี่</Button></center>
            </Col>
            <Col xs = '4'>
              <FormGroup>
                <h5> กรุณากรอกข้อมูลบัญชี </h5>
                <div className="RegForm">
                <Label>Email</Label>
                <Input type="email" name="email" id="id" placeholder="กรุณาใส่อีเมลล์ที่มีอยู่จริง" />
                <br />
                <Label>Password</Label>
                <Input type="password" name="password" id="pw" placeholder="ความยาวมากกว่า 8 ตัวอักษร" />
                <br />
                <Row>
                  <Col xs = '6'>
                    <Label check>
                      <Input type="checkbox" />{' '}{' '}
                        ยอมรับข้อกำหนด<br />
                        การให้บริการ
                      </Label>

                  </Col>
                  <Col xs = '6'>
                    <a href='/after_register'><Button outline color="primary">สมัครใช้บริการ</Button></a>
                  </Col> 
                </Row>
              </div>
              </FormGroup>
            </Col>
            </Row>
          </Container>
          </div>
          <div className="Register-Bottom">
            <img width="100%" height="200px" src={bookshelf} />
          </div>
        </div>
      </div>
    )
  }
}