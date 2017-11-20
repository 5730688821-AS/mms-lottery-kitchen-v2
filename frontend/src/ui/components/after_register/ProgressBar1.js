import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Progress } from 'reactstrap';

const number = '33';
const step = '1';

export default class ProgressBar1 extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
            <Container>
                 <div className="text-center">ขั้นตอนการสมัคร ดำเนินการแล้ว <b>{step} จาก 3</b> ขั้นตอน</div>
                <Progress color="warning" value= {number}/>
            </Container>
          )
    }
}