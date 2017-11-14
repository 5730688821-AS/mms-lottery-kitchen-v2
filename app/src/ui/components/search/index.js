import React, { PropTypes, Component } from 'react';
import logo from '../../materials/react_logo.svg';
import male from '../../materials/male_sm.png';
import female from '../../materials/female_sm.png';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container, Row, Col, Jumbotron, Breadcrumb, BreadcrumbItem, Button, Table, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './style.css';

import TopComponent from '../TopComponent';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    // this.renderTag=this.renderTag.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      value: '',
      search: [],
      url: 'mongodb://search/',
    };

  }

  //FUNCTION CONTROL

  handleSubmit(e){
    e.preventDefault();
    const temp = this.state.value;
    this.setState({
      search: [...this.state.search,temp],
      value: '',
    })
    const query = this.state.url + this.state.value
    console.log(query);
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
    this.setState({
      search: searchList
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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
        <th></th>
      </tr>
    )
  }

  generateSearchResult(){
    let activeDay = [true,false,true,false,true,false,false]
    let course='Software Engineering'
    let location='Siam Center'
    let cost='250 ฿/hr'
    const day = ['MO','TU','WE','TH','FR','SA','SU']
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
                <Button size="sm" color="warning">more info</Button>
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
                  color='info'
                  size='sm'
                  onClick={this.handleClick}
                >
                  {val}
                </Button>,
            ]
    )
    
    return(
      <Col xs= "3"> 
        <Row><br /></Row>
        <Row><font size='3' color='#4d5b68'> &nbsp;&nbsp;&nbsp; Quering Tags</font><br /></Row>
        <br/>
        <Card>
          <CardBody>
            {elem}
          </CardBody>
          <br/>
        </Card>
        <br/><Button color="danger">Reset</Button> &nbsp;&nbsp;&nbsp; <Button color="info">Re-search</Button>
        <br/>
      </Col>
    )
  }


  //RENDER
  render() {

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
          search={this.state.search}
        />
        {searchResultHeader}
        <hr className="my-2" />

        <Container>
          <Row>
            <Col xs= "9">
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