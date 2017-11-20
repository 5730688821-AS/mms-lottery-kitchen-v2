import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavbarBrand } from 'reactstrap';
import TopComponent from '../TopComponent';
import './style.css';

export default class Login extends Component {
  render() {

    return (
      <div>
      <TopComponent/>
      <br />
      <br />
      <br />
        <div className="Login-Middle">
        <label className='little'>เข้าสู่ระบบจับคู่ติวเตอร์ TutorS</label>
        <div className="LoginForm">
          <Form>
            <FormGroup>
              <Label className="my-2" for="exampleusername"><b>Username</b></Label>{' '}
              <Input type="username" name="" id="exampleUsername" placeholder="กรุณาใส่อีเมลล์ของคุณ" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label className="my-2" for="examplePassword"><b>Password</b></Label>{' '}
              <Input type="password" name="password" id="examplePassword" placeholder="กรุณาใส่รหัสผ่าน" />
            </FormGroup>
            {' '}
            <Button className="login-button" block color="success">เข้าสู่ระบบ</Button>
          </Form>
        </div>
       <div className="BottomPanel">
        <font size= '3'>ไม่มีบัญชีใช่ไหม? <a href="">สร้างบัญชี</a></font>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
      </div>
    )
  }
}
