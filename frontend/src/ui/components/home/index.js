import React, { PropTypes, Component } from 'react';

import { Container, Row, Col, Form, Input, Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';

import whiteboard from '../../materials/whiteboard.jpg';

import { Link } from 'react-router-dom'


var middleStyle = {
  backgroundImage: `url(${whiteboard})`
};

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TopComponent
          value={this.props.value}
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
        />
        <MiddleComponent />
        <Banner/>
      </div>
    )
  }
}

const MiddleComponent = () => {
  return (
    <Jumbotron style={ middleStyle }>
      <h1 className="Middle-header">ยินดีต้อนรับ!</h1>
      <p className="middle-1">Easy access, Reliable, Simplicity.</p>
      <hr className="my-2" />
      <p className='middle-2'>จุดเริ่มต้นของการเป็นติวเตอร์เริ่มได้ที่นี่</p>
      <p style={{ backgroundColor: 'white',width: '20%',marginLeft:'40%'}}>
        <Link to='/search' color="primary">ค้นหาติวเตอร์</Link> &nbsp;|&nbsp;|&nbsp;<Link to='/' color="warning">สมัครสมาชิก</Link>
      </p>
    </Jumbotron>
  )
}

const Banner = () => {
  return (
    <div style={ bannerStyle }>
    <Container>
      <Row>
        <Col xs='3'>
          <div>
            <Card style={{ backgroundColor: '#e4e4e4',borderColor: '#6666ff',padding:'5px'}}>
              <CardBody >
                <br />
                <CardTitle>ภาษาอังกฤษ อ.โย</CardTitle>
                <br />
                <br />
                <CardSubtitle>สอนฟัง พูด อ่าน เขียน TOEFL IELTS</CardSubtitle>
                <CardText>พูดได้ ใช้เป็น แกรมม่าเป๊ะ ไม่พลาดทุกสนามสอบ</CardText>
                <a href='' className="continue-read">อ่านเพิ่ม...</a>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs='3'>
          <div>
            <Card style={{ backgroundColor: '#e4e4e4',borderColor: '#6666ff',padding:'5px'}}>
              <CardBody>
                <br />
                <CardTitle>คณิตศาสตร์ กับ พี่ลุค</CardTitle>
                <br />
                <br />
                <CardSubtitle>ติวเข้ม เตรียมสอบ Entrance !</CardSubtitle>
                <CardText>ตะลุยโจทย์จริง ด้วยประสบการณ์มากกว่า 20 ปี</CardText>
                <a href='' className="continue-read">อ่านเพิ่ม...</a>
              </CardBody>
            </Card>
          </div>
        </Col>

        <Col xs='3'>
          <div>
            <Card style={{ backgroundColor: '#e4e4e4',borderColor: '#6666ff',padding:'5px'}}>
              <CardBody>
                <br />
                <CardTitle>สนุกสังคม อ.เบน</CardTitle>
                <br />
                <br />
                <CardSubtitle>มัธยมต้น-ปลาย เตรียมสอบ O-NET</CardSubtitle>
                <CardText>เนื้อหาแน่น เรียนสนุก ไม่พอใจยินดีคืนเงิน</CardText>
                <a href='' className="continue-read">อ่านเพิ่ม...</a>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs='3'>
          <div>
            <Card style={{ backgroundColor: '#e4e4e4',borderColor: '#6666ff',padding:'5px'}}>
              <CardBody>
                <br />
                <CardTitle>ฟิสิกส์ พี่พาทีน</CardTitle>
                <br />
                <br />
                <CardSubtitle>ติวเข้ม เตรียมสอบเข้ามหาฯลัย</CardSubtitle>
                <CardText>ไฟฟ้ากระแส ไฟฟ้าสถิต ของไหล กลศาสตร์</CardText>
                <a href='' className="continue-read">อ่านเพิ่ม...</a>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home;
