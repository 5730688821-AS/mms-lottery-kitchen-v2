import React, { Component } from 'react'
import { Col, Row, Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';

// Action
import { click, reset, fetch } from '../../../actions/searchAction';

// Constant
const urlSearch= 'http://localhost:3030/query?tags=';

class QueringTag extends Component{

    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
        this.handleReset=this.handleReset.bind(this);
      }
    
    handleClick(e){
        const idx = e.target.name
        let searchList = this.props.search
        searchList.splice(idx,1)
        let strSearch = ''
    
        for(let i=0; i<searchList.length; i++){
          strSearch = i === 0 ? strSearch+searchList[i] : strSearch+'+'+searchList[i]
        }
        let url = searchList.length === 0 ? urlSearch : urlSearch+strSearch
        this.props.click(searchList,url);
        this.props.fetch(url);
    }
    
    handleReset(){
        this.props.reset();
    }

    render(){
        let elem = []
        this.props.search.map((val,index) =>
          elem = [
                    ...elem,
                    <br key={val}/>,<Button
                      key={index}
                      name={index}
                      color='success'
                      size='sm'
                      onClick={this.handleClick}
                    >
                      {val}
                    </Button>,
                ]
        )
        
        return(
          <Col xs= "2"> 
            <Row><br /></Row>
            <Row><font size='3' color='#4d5b68'> &nbsp;&nbsp;&nbsp; Quering Tags</font><br /></Row>
            <br/>
            <Card>
              <CardBody>
                {elem}
              </CardBody>
              <br/>
            </Card>
            <br/><Button onClick={this.handleReset} size= "sm">Reset</Button>
            <br/>
          </Col>
        )
    }
}

function mapStateToProps(state){
    return{
        search: state.search.search,
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return{
        click: (search,url) => dispatch(click(search,url)),
        reset: () => dispatch(reset()),
        fetch: (url) => dispatch(fetch(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueringTag);