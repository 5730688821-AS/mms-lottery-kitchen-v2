import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardImg, Button } from 'reactstrap';

import tutor from '../../materials/tutor.jpg';
import learner from '../../materials/learner.jpg';

export default class TypeSelection extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
            <Container>
              <br />
              <center><h4>ขั้นตอนที่ 2: โปรดเลือกประเภทของบัญชีผู้ใช้</h4></center>
              <br />
              <Row>
                <Col xs = '6'>
                <center><h3>ผู้สอน (Tutor)</h3></center>
                <Card>
                  <CardImg top height='170px' width="100%" src={tutor} alt="Card image cap" />
                  <CardBody>
                    <br />
                    <Row>
                      <Col xs ='1'/>
                      <Col xs ='10'>
                        &nbsp;&nbsp;&nbsp;เมื่อคุณเลือกลงทะเบียนเพื่อเป็น<b>ผู้สอน</b> ข้อมูลต่างๆ ที่เกี่ยวกับการสอนของคุณจะถูกบันทึกไว้ในระบบโดยอัติโนมัติ ทำให้คุณสามารถเรียกดูข้อมูลย้อนหลังได้โดยอิสระ
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><i>ฟีเจอร์ที่สามารถใช้ได้</i></b> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>เรียกดู</b>ข้อมูลของผู้สอน/ผู้เรียนในระบบ <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>ค้นหา</b>ประกาศการสอนได้ <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>สร้าง</b>ประกาศการสอนได้ <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>รับรีวิว</b>จากผู้เรียนได้ <br />
                        <br />
                        <center><Button outline color="success">สมัครเป็นผู้สอน</Button></center>
                      </Col>
                      <Col xs ='1'/>
                    </Row>
                    <br />
                  </CardBody>
                </Card>
                </Col>
                <Col xs = '6'>
                <center><h3>ผู้เรียน (Learner)</h3></center>
                <Card>
                  <CardImg top height='170px' width="100%" src={learner} alt="Card image cap" />
                  <CardBody>
                  <br />
                    <Row>
                      <Col xs ='1'/>
                      <Col xs ='10'>
                        &nbsp;&nbsp;&nbsp;เมื่อคุณเลือกลงทะเบียนเพื่อเป็น<b>ผู้เรียน</b> การค้นหาผู้สอนจะสามารถทำได้รวดเร็วยิ่งขึ้น รวมถึงข้อมูลต่างๆ ที่เกี่ยวกับคุณจะถูกบันทึกไว้ในระบบเพื่อความสะดวกในการเรียกดูย้อนหลัง
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><i>ฟีเจอร์ที่สามารถใช้ได้</i></b> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>เรียกดู</b>ข้อมูลของผู้สอน/ผู้เรียนในระบบ <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>ค้นหา</b>ประกาศการสอนได้ <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>จอง</b>ประกาศการสอนได้ <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - สามารถ<b>ให้รีวิว</b>กับผู้สอนได้ <br />
                        <br />
                        <center><Button outline color="primary">สมัครเป็นผู้เรียน</Button></center>
                      </Col>
                      <Col xs ='1'/>
                    </Row>
                    <br />
                  </CardBody>
                </Card>
                </Col>
              </Row>
          </Container>
          )
    }
}