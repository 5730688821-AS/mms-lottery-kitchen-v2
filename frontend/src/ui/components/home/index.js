import React, { PropTypes, Component } from 'react';

import { Container, Row, Col, Form, Input, Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';

import whiteboard from '../../materials/whiteboard.jpg';
import bookshelf from '../../materials/bookshelf.jpg';
import history from '../../../helpers/history';


var middleStyle = {
  backgroundImage: `url(${whiteboard})`,
  backgroundSize: 'cover',
  borderRadius: '0rem',
};

class Home extends Component {
  constructor(){
    super();
    this.handleOnClick=this.handleOnClick.bind(this);
  }

  handleOnClick(e){
    if(e.target.id === 'search'){
      history.push('/search')
    } else if(e.target.id === 'register'){
      history.push('/register')
    }
  }

  render() {
    return (
      <div className="Home">
        <TopComponent />
        <MiddleComponent handleOnClick={this.handleOnClick} />
        <Banner/>
      </div>
    )
  }
}

const MiddleComponent = (props) => {
  return (
    <Jumbotron style={ middleStyle }>
      <h1 className="Middle-header">ยินดีต้อนรับ!</h1>
      <p className="middle-1">Easy access, Reliable, Simplicity.</p>
      <hr className="my-2" />
      <p className='middle-2'>จุดเริ่มต้นของการเป็นติวเตอร์เริ่มได้ที่นี่</p>
      <p style={{ textAlign: 'center' }}>
        <Button id='search' onClick={props.handleOnClick} color="primary">ค้นหาติวเตอร์</Button> &nbsp;&nbsp;&nbsp;<Button id='register' onClick={props.handleOnClick} color="warning">สมัครสมาชิก</Button>
      </p>
    </Jumbotron>
  )
}

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bookshelf})`,
    backgroundSize: 'cover',
    borderRadius: '0rem',
  }
  const cardStyle = {
    backgroundColor: '#e4e4e4BF',
    borderColor: '#6666ff',
  }
  return (
     <div style={ bannerStyle }>
    <Container>
      <Row>
        <Col xs='3'>
          <div>
            <Card style={ cardStyle }>
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
            <Card style={ cardStyle }>
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
            <Card style={ cardStyle }>
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
            <Card style={ cardStyle }>
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