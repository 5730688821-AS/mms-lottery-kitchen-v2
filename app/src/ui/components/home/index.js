import React, { PropTypes, Component } from 'react';

import { Container, Row, Col, Form, Input, Jumbotron, Button } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TopComponent/>
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