import React, { PropTypes, Component } from 'react';

import { Container, Row, Col, Form, Input, Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';

import { Link } from 'react-router-dom'

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
        <Banner />
      </div>
    )
  }
}

const MiddleComponent = () => {
  return(
    <Jumbotron>
      <h1 className="display-3">ยินดีต้อนรับ!</h1>
      <p className="lead">Easy access, Reliable, Simplicity.</p>
      <hr className="my-2" />
      <p>จุดเริ่มต้นของการเป็นติวเตอร์เริ่มได้ที่นี่</p>
      <p className="lead">
        <Link to='/search' color="primary">ค้นหาติวเตอร์</Link> &nbsp;&nbsp;&nbsp;<Link to='/' color="warning">สมัครสมาชิก</Link>
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