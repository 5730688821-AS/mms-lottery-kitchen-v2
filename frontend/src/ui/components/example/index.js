import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavbarBrand, FormFeedback } from 'reactstrap';
import TopComponent from '../TopComponent';
import './style.css';

export default class login extends Component {
  render() {
    
    return (
      <div className="Login"  >
        <Form>
        <FormGroup>
        <Label for="examplePassword">Input with danger</Label>
        <Input valid={false} />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
        </Form> 
      </div>
    )
  }
}