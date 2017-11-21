import React, { PropTypes, Component } from 'react';
import { Form, FormGroup, FormFeedback, Label, Input, Container, Row, Col, Button } from 'reactstrap';
import TopComponent from '../TopComponent';
import axios from 'axios';
import './style.css';
import bookshelf from '../../materials/bookshelf.jpg';

import history from '../../../helpers/history';

import { Link } from 'react-router-dom';

const regEx = /.+\@.+\..+/;

export default class Register extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isValid: false,
      isChecked: false,
    }
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleConfirmPassword=this.handleConfirmPassword.bind(this);
    this.toggle=this.toggle.bind(this);
    this.handleCreateAccount=this.handleCreateAccount.bind(this);
  }

  handleEmail(e){
    this.setState({
      email: e.target.value,
    })
    if(regEx.test(e.target.value)){
      axios.get('http://localhost:3030/isValid?id=' + e.target.value).then((res) =>{
        console.log(res.data.result)
        this.setState({
          isValid: res.data.result,
        })
      })
    }
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleConfirmPassword(e){
    this.setState({
      confirmPassword: e.target.value
    })
  }

  toggle(){
    this.setState({
      isChecked: !this.state.isChecked,
    })
  }

  handleCreateAccount(){
    axios.get('http://localhost:3030/createAccount?id=' + this.state.email + '&pw=' + this.state.password)
    history.push('/after_register')
  }

  render() {
    console.log(this.state)
    console.log(regEx.test(this.state.email))
    console.log(!this.state.isChecked && this.state.isValid && this.state.password.length>=8)
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
                  <Input style={this.state.email.length > 5 ? (regEx.test(this.state.email) ? (this.state.isValid ? {borderColor: '#23a13f'} : {borderColor: '#da3749'}) : {borderColor: '#fdc02f'}) : null}
                    onChange={this.handleEmail}
                    type="email"
                    name="email"
                    id="id"
                    value={this.state.email}
                    placeholder="กรุณาใส่อีเมลล์ที่มีอยู่จริง"
                  />
                  <FormFeedback style={{fontSize: '0.7em'}}>{this.state.email.length > 5 ? (regEx.test(this.state.email) ? (this.state.isValid ? 'สามารถใช้ไอดีนี้ได้' : 'ไอดีถูกใช้แล้ว') : 'กรุณากรอก E-mail ให้ถูกแบบฟอร์ม') : ''}</FormFeedback>
                  <br />
                  <Label>Password</Label>
                  <Input
                    style={this.state.password.length === 0 ? null : this.state.password.length >= 8 ? {borderColor: '#23a13f'} : {borderColor: '#fdc02f'}}
                    onChange={this.handlePassword}
                    type="password"
                    name="password"
                    id="pw"
                    value={this.state.password}
                    placeholder="ความยาวอย่างน้อย 8 ตัวอักษร"
                  />
                  <FormFeedback style={{fontSize: '0.7em'}}>{this.state.password.length === 0 ? null : this.state.password.length >= 8 ? null : 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร'}</FormFeedback>
                  <br />
                  <Label>Confirm Password</Label>
                  <Input
                    style={this.state.confirmPassword.length === 0 ? null : this.state.password === this.state.confirmPassword ? {borderColor: '#23a13f'} : {borderColor: '#fdc02f'}}
                    onChange={this.handleConfirmPassword}
                    type="password"
                    name="password"
                    id="pw"
                    value={this.state.confirmPassword}
                    placeholder="ความยาวอย่างน้อย 8 ตัวอักษร"
                  />
                  <FormFeedback style={{fontSize: '0.7em'}}>{this.state.confirmPassword.length <= 4 ? null : this.state.password === this.state.confirmPassword ? null : 'กรุณากรอกรหัสผ่านให้ตรงกับรหัสผ่านข้างต้น'}</FormFeedback>
                  <br />
                  <Row>
                    <Col xs = '6'>
                      <Label check>
                        <Input type="checkbox" onClick={this.toggle} checked={this.state.isChecked} />{' '}{' '}
                          ยอมรับข้อกำหนด<br />
                          การให้บริการ
                        </Label>

                    </Col>
                    <Col xs = '6'>
                      <Button onClick={this.handleCreateAccount} disabled={!(this.state.isChecked && this.state.isValid && this.state.password.length>=8 && (this.state.password === this.state.confirmPassword))} outline color="primary">สมัครใช้บริการ</Button>
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