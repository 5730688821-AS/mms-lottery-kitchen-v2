import React, { PropTypes, Component } from 'react';
import logo from '../../materials/react_logo.svg';
import male from '../../materials/male_sm.png';
import female from '../../materials/female_sm.png';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container, Row, Col, Jumbotron, Breadcrumb, BreadcrumbItem, Button, Table, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import './style.css';
import TopComponent from '../TopComponent';


const urlSearch= 'http://localhost:3030/query?tags=';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: [],
      value: '',
      search: [],
      url: urlSearch,
      data: {},
    };
  }

  //FUNCTION CONTROL

  // toggle control
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const temp = this.state.value.toLowerCase().split(/(\s+)/).filter((e)=>e.trim().length>0)
    let isExist = []
    let tmp = []
    let strSearch = temp
    let t=''
    for(let i=0;i<temp.length;i++){
      isExist=[...isExist,this.state.search.includes(temp[i])]
      if(!isExist[i] && !tmp.includes(temp[i])){
        tmp = [...tmp,temp[i]]
        t = this.state.search.length>0 ? t + '+' + temp[i] : i===0 ? t + temp[i] : t + '+' + temp[i]
      }
    }
    let url = this.state.url + t

    this.setState({
      search: [...this.state.search,...tmp],
      value: '',
      url: url,
    })

    axios.get(url).then((res) =>{
      let t=[]
      for(let i=0;i<res.data.length;i++){
        t=[...t,false]
      }
      this.setState({
        data: res.data,
        modal: t,
      })
    })

  }

  handleChange(e){
    this.setState({
      value: e.target.value,
    })
  }

  handleClick(e){
    const idx = e.target.name
    let searchList = this.state.search
    searchList.splice(idx,1)
    
    let strSearch = ''
    for(let i=0; i<searchList.length; i++){
      strSearch = i === 0 ? strSearch+searchList[i] : strSearch+'+'+searchList[i]
    }

    let url = searchList.length === 0 ? urlSearch : urlSearch+strSearch

    this.setState({
      search: searchList,
      url: url
    })

    axios.get(url).then((res) =>{
      this.setState({
        data: res.data,
      })
    })
  }

  handleReset(){
    this.setState({
      modal: [],
      search: [],
      url: urlSearch,
      data: {},
    })
  }

  toggle(e) {
    let modal = this.state.modal
    if(e!==undefined){
      const idx = parseInt(e.target.name)
      modal[idx]=!modal[idx]
      this.setState({
        modal: modal
      });
    } else {
      for(let i=0;i<modal.length;i++){
        modal[i]=false;
      }
      this.setState({
        modal: modal
      })
    }
  }

  // FUNCTION GENERATE COMPONENT
  generateHeaderTable(){
    return(
      <tr>
        <th><center>Course</center></th>
        <th><center>Location</center></th>
        <th><center>Cost</center></th>
        <th><center>Gender</center></th>
        <th><center>Available days</center></th>
        <th><center>Review</center></th>
        <th></th>
      </tr>
    )
  }

  generateSearchResult(){
    const day = ['MO','TU','WE','TH','FR','SA','SU']
    

    let tableGen =[]
    if(this.state.data.length>0){

    this.state.data.map((data,index) => {

      let elem = []
      let activeDay = [false,false,false,false,false,false,false]
      for(let i=0;i<data.adays[0].length;i++){
        activeDay[data.adays[0][i]-1]=true;
      }
      
      day.map((day,idx) => {
        elem=[
          ...elem,
          <PaginationItem key={idx} active={activeDay[idx]}>
            <PaginationLink href="#">
              {day}
            </PaginationLink>
          </PaginationItem>
        ]
      })

      tableGen=[
        ...tableGen,
        (<tr key={data._id}>
          <td>{data.cname_en}</td>
          <td>{data.loc}</td>
          <td>{data.cost + ' ฿/hr'}</td>
          <td><img width="25px" height="25px" src={data.gender === 'male' ? male: female} /></td>
          <td>
            <Pagination size="sm">
              {elem}
            </Pagination>
          </td>
          <td>
            {data.review}
          </td>
          <td>
          <div>
            <Button name={index} color="warning" size="sm" onClick={this.toggle}>more info</Button>
            <Modal name={index} isOpen={this.state.modal[parseInt(index)]} toggle={this.toggle}>
              <ModalHeader name={index} toggle={this.toggle}>Information</ModalHeader>
                <ModalBody>
                  {data.desc}
                </ModalBody>
              <ModalFooter>
                <Button name={index} color="primary" onClick={this.toggle}>Book</Button>{' '}
                <Button name={index} color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
          </td>
        </tr>),
      ]

    })
    }

    return(
            tableGen
          )
  }

  generateQueringTag(){

    let elem = []
    
    this.state.search.map((val,index) =>
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


  //RENDER
  render() {
    console.log(this.state)
    const searchResultHeader = (
      <Container>
        <Row><br /></Row>
        <Row>
          <br />
          <Col xs="3">
            <font size='3' color='#4d5b68'> Search Result </font>
          </Col>
        </Row>
      </Container>
    )

    return (
      <div className="Search">
        <TopComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        {searchResultHeader}
        <hr className="my-2" />

        <Container>
          <Row>
            <Col xs= "10">
              <Row><br /></Row>
              <Row><Col xs="3"><h5> {this.state.data.length>0 ? this.state.data.length : '0'} course results </h5></Col></Row>
              <Row><br /></Row>
              <Table responsive>
                <thead>
                  {this.generateHeaderTable()}
                </thead>
                <tbody>
                  {this.generateSearchResult()}
                </tbody>
              </Table>
            </Col>
            {this.generateQueringTag()}
          </Row>
        </Container>

      
      </div>
    )
  }
}

export default Search;