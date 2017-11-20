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
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข้อกำหนดเพิ่มเติมเหล่านี้ ข้อกำหนดในการให้บริการของ Google และข้อกำหนดและนโยบายอื่นๆ 
            ที่อ้างถึงในที่นี้ จะมีผลบังคับใช้กับการใช้งานหน้าเว็บ Google+ ของคุณ (“ข้อกำหนดของหน้าเว็บ Google+”) 
            โปรดอ่านการปรับปรุงแก้ไขเป็นประจำ การใช้หน้าเว็บ Google+ ของคุณหมายถึงคุณได้ยอมรับข้อกำหนดในการ
            ให้บริการของหน้าเว็บ Google+ และการใช้หน้าเว็บ Google+ ของคุณอย่างต่อเนื่องหมายความว่าคุณยอมรับ
            ในการปรับปรุงแก้ไขที่เกิดขึ้น ถ้าคุณไม่ประสงค์ที่จะยอมรับข้อกำหนดของหน้าเว็บ Google+ โปรดอย่าใช้หน้า
            เว็บ Google+
            </p>
            </Col>
            <Col xs = '4'>
              <FormGroup>
                <h4> กรุณากรอกข้อมูลบัญชี </h4>
                <br />
                <Label>Email</Label>
                <Input type="email" name="email" id="id" placeholder="กรุณาใส่อีเมลล์ที่มีอยู่จริง" />
                <br />
                <Label>Password</Label>
                <Input type="password" name="password" id="pw" placeholder="ความยาวมากกว่า 8 ตัวอักษร" />
                <br />
                <Row>
                  <Col xs = '8'>
                    <Label check>
                      <Input type="checkbox" />{' '}{' '}
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
          <div className="Register-Bottom">
            <img width="100%" height="250px" src={bookshelf} />
          </div>
        </div>
      </div>
    )
  }
}