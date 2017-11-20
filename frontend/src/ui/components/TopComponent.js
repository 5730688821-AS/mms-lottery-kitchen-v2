import React, { Component } from 'react';
import { Form, Input, Navbar, Container, Row, Col, NavbarBrand, } from 'reactstrap';
import history from '../../helpers/history';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { update, submit, fetch } from '../../actions/searchAction';

class TopComponent extends Component {

    constructor(){
        super();
        this.handleOnClick=this.handleOnClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.props.update(e.target.value)
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(history)
        if(history.location.pathname==='/'){
            history.push('/search')
            console.log(history)
        }
        console.log(this.props)
        const temp = this.props.value.toLowerCase().split(/(\s+)/).filter((e)=>e.trim().length>0)
        let isExist = []
        let tmp = []
        let t=''
        for(let i=0;i<temp.length;i++){
          isExist=[...isExist,this.props.search.includes(temp[i])]
          if(!isExist[i] && !tmp.includes(temp[i])){
            tmp = [...tmp,temp[i]]
            t = this.props.search.length>0 ? t + '+' + temp[i] : i===0 ? t + temp[i] : t + '+' + temp[i]
          }
        }
        let url = this.props.url + t

        this.props.submit(
            [...this.props.search,...tmp],
            '',
            url,
        );
        
        this.props.fetch(url);
      }

    handleOnClick(e){
        console.log(history)
        e.target.id === 'home' ? history.push('/') : history.push('/search')
    }

    render(){
        console.log(this.props)
        console.log(this.state)
        return (
        <Navbar color="inverse" light>
            <Container>
                <Row>
                    <Col xs="1"></Col>
                    <Col>
                    <Row>
                        <NavbarBrand href='#' onClick={this.handleOnClick}><font id='home' color ='#ffffff'>TutorS</font></NavbarBrand>
                        <Form onSubmit={this.handleSubmit}>
                            <Input
                                type='text'
                                value={this.props.value}
                                placeholder='Search Course         '
                                onChange={this.handleChange}
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

function mapStateToProps(state){
    console.log(state)
    return {
        value: state.search.value,
        search: state.search.search,
        url: state.search.url
    }
}

function mapDispatchToProps(dispatch){
    return {
        update: (value) => dispatch(update(value)),
        submit: (search,value,url) => dispatch(submit(search,value,url)),
        fetch: (url) => dispatch(fetch(url)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopComponent));