import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';

export default class FillFormLearner extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
            <div>
                 <hr/>
                 <b>ส่วนที่ 3: ข้อมูลเพิ่มเติมสำหรับผู้เรียน</b>
                 <br />
                 <br />
                 <Row>
                     <Col xs ='3'>
                         ชื่อสถานศึกษา*<Input type="text" name="school_th" id="school_th" placeholder="ภาษาไทย" />
                     </Col>
                     <Col xs ='3'>
                        <br/><Input type="text" name="school_en" id="school_en" placeholder="ภาษาอังกฤษ" />
                     </Col>
                     <Col xs ='2'>
                         ระดับการศึกษา*<Input type="text" name="year" id="year" placeholder="ex. ม.6" />
                     </Col>
                     <Col xs ='3'>
                         จังหวัด*<Input type="datetime" name="province" id="province" placeholder="ex. กรุงเทพฯ" />
                     </Col>
                 </Row>
                 <br />
            </div>
          )
    }
}