import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Progress } from 'reactstrap';

const number = '66';
const step = '2';

export default class ProgressBar2 extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
            <Container>
                 <div className="text-center">ขั้นตอนการสมัคร ดำเนินการแล้ว <b>{step} จาก 3</b> ขั้นตอน</div>
                <Progress color="warning" value= {number}>
                   สร้าง username และ password สำเร็จ + เลือกประเภทของบัญชีผู้ใช้แล้ว
                </Progress>
            </Container>
          )
    }
}