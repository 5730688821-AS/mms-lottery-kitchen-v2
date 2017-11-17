import React, { Component } from 'react';
import { Form, Input, Navbar, Container, Row, Col, NavbarBrand, Nav} from 'reactstrap';
import history from '../../global/history';

export default class TopComponent extends Component {

    constructor(props){
        super(props)
        this.handleOnClick=this.handleOnClick.bind(this)
    }

    handleOnClick(e){
        e.target.id === 'home' ? history.replace('/') : history.replace('/search')
    }

    render(){
        return (
        <Navbar color="inverse" light>
            <Container>
                <Row>
                    <Col xs="1"></Col>
                    <Col>
                    <Row>
                        <NavbarBrand href='#' onClick={this.handleOnClick}><font id='home' color ='#ffffff'>TutorS</font></NavbarBrand>
                        <Form onSubmit={this.props.handleSubmit}>
                            <Input
                                type='text'
                                value={this.props.value}
                                placeholder='Search Course         '
                                onChange={this.props.handleChange}
                            />
                        </Form>
                        <NavbarBrand href='#' onClick={this.handleOnClick}><font id='search' size ='3' color ='#c8c9cb'> &nbsp;&nbsp;&nbsp; Search </font></NavbarBrand>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        )
    }
}