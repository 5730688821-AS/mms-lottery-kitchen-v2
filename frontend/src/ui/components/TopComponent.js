import React, { Component } from 'react';
import { Form, Input, Navbar, Container, Row, Col, NavbarBrand, Nav } from 'reactstrap';
import history from '../../helpers/history';
import { update, fetch, submit} from '../../actions/searchAction';
import { connect } from 'react-redux'
class TopComponent extends Component {

    constructor(props){
        super(props)
        this.handleOnClick=this.handleOnClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleOnClick(e){
        if(e.target.id === 'home'){
            history.push('/')
        } else if(e.target.id === 'search'){
            history.push('/search')
        } else if(e.target.id === 'login'){
            history.push('/login')
        } else if(e.target.id === 'register'){
            history.push('register')
        }
    }

    handleSubmit(e){
        if(history.location.pathname==='/'){
            history.push('/search')
        }
        e.preventDefault();
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
        console.log(url)
        this.props.submit([...this.props.search,...tmp],'',url)
        this.props.fetch(url)
        
    }
    
    handleChange(e){
        this.props.update(e.target.value)
    }

    render(){
        console.log(this.props)
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
                        <NavbarBrand href='#' onClick={this.handleOnClick}><font id='login' size ='3' color ='#c8c9cb'> &nbsp;&nbsp;&nbsp; Login </font></NavbarBrand>
                        <NavbarBrand href='#' onClick={this.handleOnClick}><font id='register' size ='3' color ='#c8c9cb'> &nbsp;&nbsp;&nbsp; Register </font></NavbarBrand>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        )
    }
}

function mapStateToProps(state){
    return{
        value: state.search.value,
        search: state.search.search,
        url: state.search.url,
    }
}

function mapDispatchToProps(dispatch){
    return {
        update: (value) => dispatch(update(value)),
        submit: (search,value,url) => dispatch(submit(search,value,url)),
        fetch: (url) => dispatch(fetch(url)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopComponent)