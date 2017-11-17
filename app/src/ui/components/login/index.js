import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavbarBrand } from 'reactstrap';
import TopComponent from '../TopComponent';
import './style.css';

export default class login extends Component {
  render() {
    
    return (
      <div className="Login"  >
        <Form>
        <h1 className="display-3">TutorS</h1>
          <FormGroup>
            <Label className="my-2" for="exampleusername">Username</Label>{' '}
            <Input type="username" name="" id="exampleUsername" placeholder="enter your username" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label className="my-2" for="examplePassword">Password</Label>{' '}
            <Input type="password" name="password" id="examplePassword" placeholder="enter your username" />
          </FormGroup>
          {' '}
          <Button color="success">Login</Button>
        </Form> 
      </div>
    )
  }
}