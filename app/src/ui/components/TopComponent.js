import React, { Component } from 'react';
import { Form, Input, Navbar, Container, Row, Col, NavbarBrand} from 'reactstrap';

export default class TopComponent extends Component {
    render(){
        return (
        <Navbar color="inverse" light>
            <Container>
                <Row>
                    <Col xs="1"></Col>
                    <Col>
                    <Row>
                        <NavbarBrand href="/"><font color ='#ffffff'>TutorS</font></NavbarBrand>
                        <Form onSubmit={this.props.handleSubmit}>
                            <Input
                                type='text'
                                value={this.props.value}
                                placeholder='Search Course         '
                                onChange={this.props.handleChange}
                            />
                        </Form>
                        <NavbarBrand href="/search"><font size ='3' color ='#c8c9cb'> &nbsp;&nbsp;&nbsp; Search </font></NavbarBrand>
                        <NavbarBrand href="/search"><font size ='3' color ='#c8c9cb'></font></NavbarBrand>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        )
    }
}