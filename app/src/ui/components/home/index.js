import React, { PropTypes, Component } from 'react';

import { Container, Row, Col, Form, Input, Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TopComponent/>
      <div>
        <Jumbotron>
          <h1 className="display-3">ยินดีต้อนรับ!</h1>
          <p className="lead">Easy access, Reliable, Simplicity.</p>
          <hr className="my-2" />
          <p>จุดเริ่มต้นของการเป็นติวเตอร์เริ่มได้ที่นี่</p>
          <p className="lead">
            <Button color="primary">ค้นหาติวเตอร์</Button> &nbsp;&nbsp;&nbsp;<Button color="warning">สมัครสมาชิก</Button>
          </p>
        </Jumbotron>
      </div>

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
      </div>
    )
  }
}

export default Home;