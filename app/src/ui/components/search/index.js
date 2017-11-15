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
    // this.renderTag=this.renderTag.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
      isOpen: false,
      value: '',
      search: [],
      url: '',
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
    const temp = this.state.value
    let isExist = this.state.search.includes(temp)
    let strSearch = temp
    let url = this.state.search.length === 0 ? this.state.url + urlSearch + temp : this.state.url + (isExist === true ? '' : '+' + temp)

    this.setState({
      search: isExist === true ? [...this.state.search] :[...this.state.search,temp],
      value: '',
      url: url,
    })

    axios.get(url).then((res) =>{
      this.setState({
        data: res,
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

    this.setState({
      search: searchList,
      url: searchList.length === 0 ? '' : urlSearch+strSearch
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
    console.log(this.state)
    let activeDay = [true,false,true,false,true,false,false]
    let course='Software Engineering'
    let location='Siam Center'
    let cost='250 ฿/hr'
    const day = ['MO','TU','WE','TH','FR','SA','SU']
    let star= '5.0'
    let elem = []

    day.map((day,index) => {
      elem=[
        ...elem,
        <PaginationItem key={index} active={activeDay[index]}>
          <PaginationLink href="#">
            {day}
          </PaginationLink>
        </PaginationItem>
      ]
    })
    return(
            <tr>
              <td>{course}</td>
              <td>{location}</td>
              <td>{cost}</td>
              <td><img width="25px" height="25px" src={male} /></td>
              <td>
                <Pagination size="sm">
                  {elem}
                </Pagination>
              </td>
              <td>
                {star}
              </td>
              <td>
              <div>
               <Button color="warning" size="sm" onClick={this.toggle}>more info</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>Information</ModalHeader>
                    <ModalBody>
                      This is description.
                    </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Book</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              </td>
            </tr>
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
        <br/><Button size= "sm">Reset</Button>
        <br/>
      </Col>
    )
  }


  //RENDER
  render() {
    console.log('222222222')

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
              <Row><Col xs="3"><h5> 50 course results </h5></Col></Row>
              <Row><br /></Row>
              <Table responsive>
                <thead>
                  {this.generateHeaderTable()}
                </thead>
                <tbody>
                  {this.generateSearchResult()}
                  <tr>
                    <td>Digital Photo</td>
                    <td>MBK</td>
                    <td>500 ฿/hr</td>
                    <td><img width="25px" height="25px" src={female} /></td>
                    <td>
                      <Pagination size="sm">
                        <PaginationItem>
                          <PaginationLink href="#">
                            MO
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            TU
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            WE
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            TH
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            FR
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink href="#">
                            SA
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink href="#">
                            SU
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </td>
                    <td>4.5</td>
                    <td>
                      <Button size="sm" color="warning">more info</Button>
                    </td>
                  </tr>
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