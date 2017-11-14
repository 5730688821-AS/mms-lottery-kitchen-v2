import React, { PropTypes, Component } from 'react';
import logo from '../../materials/react_logo.svg';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container, Row, Col, Form, Input, Jumbotron, Button } from 'reactstrap';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar color="inverse" light>
        <Container>
          <Row>
            <Col xs="1"></Col>
            <Col>
              <Row>
                <NavbarBrand href="/"><font color ='#ffffff'>TutorS</font></NavbarBrand>
                <Form>
                  <Input type="text" name="keywords" id="keywords" placeholder="Search Courses      " />
                </Form>
                <NavbarBrand href="/search"><font size ='3' color ='#c8c9cb'> &nbsp;&nbsp;&nbsp; Review </font></NavbarBrand>
                <NavbarBrand href="/search"><font size ='3' color ='#c8c9cb'> About Us </font></NavbarBrand>
              </Row>
            </Col>
          </Row>
          </Container>
        </Navbar>

        <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>

        <Container>
        <Row>
          Hello, welcome home.
        </Row>
          </Container>
      </div>
    )
  }
}

export default Home;