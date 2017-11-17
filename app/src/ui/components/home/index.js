import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';


import history from '../../../global/history';
class Home extends Component {

  constructor(){
    super()
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(e){
    e.target.id === 'search' ? history.push('/search') : history.push('/')
  }

  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <TopComponent
          value={this.props.value}
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
        />
        <MiddleComponent handleClick={this.handleClick} />
        <Banner />
      </div>
    )
  }
}

const MiddleComponent = (props) => {
  return(
    <Jumbotron>
      <h1 className="display-3">ยินดีต้อนรับ!</h1>
      <p className="lead">Easy access, Reliable, Simplicity.</p>
      <hr className="my-2" />
      <p>จุดเริ่มต้นของการเป็นติวเตอร์เริ่มได้ที่นี่</p>
      <p className="lead">
        <Button id='search' onClick={props.handleClick} color="primary">ค้นหาติวเตอร์</Button>
        &nbsp;&nbsp;&nbsp;
        <Button id='register' onClick={props.handleClick} color="warning">สมัครสมาชิก</Button>
      </p>
    </Jumbotron>
  )
}

const Banner = () => {
  return(
    <Container>
      <Row>
        <Col xs='2'>
        <div>
          <Card>
            <CardBody>
              <br />
              <CardTitle>Banner</CardTitle>
              <br />
              <br />
              <CardSubtitle>Hello guys!</CardSubtitle>
              <CardText>Join me on this site, it's cool site you know.</CardText>
              <br />
            </CardBody>
          </Card>
        </div>
        </Col>
        <Col xs='2'>
        <div>
          <Card>
            <CardBody>
              <br />
              <CardTitle>Banner</CardTitle>
              <br />
              <br />
              <CardSubtitle>Hello guys!</CardSubtitle>
              <CardText>Join me on this site, it's cool site you know.</CardText>
              <br />
            </CardBody>
          </Card>
        </div>
        </Col>
        <Col xs='2'>
        <div>
          <Card>
            <CardBody>
              <br />
              <CardTitle>Banner</CardTitle>
              <br />
              <br />
              <CardSubtitle>Hello guys!</CardSubtitle>
              <CardText>Join me on this site, it's cool site you know.</CardText>
              <br />
            </CardBody>
          </Card>
        </div>
        </Col>
        <Col xs='2'>
        <div>
          <Card>
            <CardBody>
              <br />
              <CardTitle>Banner</CardTitle>
              <br />
              <br />
              <CardSubtitle>Hello guys!</CardSubtitle>
              <CardText>Join me on this site, it's cool site you know.</CardText>
              <br />
            </CardBody>
          </Card>
        </div>
        </Col>
        <Col xs='2'>
        <div>
          <Card>
            <CardBody>
              <br />
              <CardTitle>Banner</CardTitle>
              <br />
              <br />
              <CardSubtitle>Hello guys!</CardSubtitle>
              <CardText>Join me on this site, it's cool site you know.</CardText>
              <br />
            </CardBody>
          </Card>
        </div>
        </Col>
        <Col xs='2'>
        <div>
          <Card>
            <CardBody>
              <br />
              <CardTitle>Banner</CardTitle>
              <br />
              <br />
              <CardSubtitle>Hello guys!</CardSubtitle>
              <CardText>Join me on this site, it's cool site you know.</CardText>
              <br />
            </CardBody>
          </Card>
        </div>
        </Col>

        
      </Row>
    </Container>
  )
}

export default Home;