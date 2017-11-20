import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavbarBrand } from 'reactstrap';
import TopComponent from '../TopComponent';
import './style.css';

export default class login extends Component {
  render() {

    return (
      <div className="Login">
        <h1 className="display-3"><label className='little'>เข้าสู่ระบบจับคู่ติวเตอร์</label><br/>TutorS</h1>
        <div className="LoginForm">
          <Form>

            <FormGroup>
              <Label className="my-2" for="exampleusername">Username</Label>{' '}
              <Input type="username" name="" id="exampleUsername" placeholder="enter your username" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label className="my-2" for="examplePassword">Password</Label>{' '}
              <Input type="password" name="password" id="examplePassword" placeholder="enter your password" />
            </FormGroup>
            {' '}
            <Button className="login-button" block color="success">Login</Button>
          </Form>
        </div>
        <div className="RegisterForm">
        Don't Have Account? <a href="" className="link">Create an Account.</a>
        </div>
      </div>
    )
  }
}
