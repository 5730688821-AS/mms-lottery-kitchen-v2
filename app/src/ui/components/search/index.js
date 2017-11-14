import React, { PropTypes, Component } from 'react';
import logo from '../../materials/react_logo.svg';
import male from '../../materials/male_sm.png';
import female from '../../materials/female_sm.png';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container, Row, Col, Form, Input, Jumbotron, Breadcrumb, BreadcrumbItem, Button, Table, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './style.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Search">  
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
                <NavbarBrand href="/search"><font size='3' color='#c8c9cb'> &nbsp;&nbsp;&nbsp; Review </font></NavbarBrand>
                <NavbarBrand href="/search"><font size='3' color='#c8c9cb'> About Us </font></NavbarBrand>
              </Row>
            </Col>
          </Row>
          </Container>
        </Navbar>

        <Container>
        <Row><br /></Row>
          <Row><br />
            <Col xs="3"><font size='3' color='#4d5b68'> Search Result </font></Col>
          </Row>
          
        </Container>

        <hr className="my-2" />

        <Container>
        <Row>
          <Col xs= "9">
          <Row><br /></Row>
          <Row><Col xs="3"><h5> 50 course results </h5></Col></Row>
          <Row><br /></Row>
          <Table responsive>
        <thead>
          <tr>
            <th><center>Course</center></th>
            <th><center>Location</center></th>
            <th><center>Cost</center></th>
            <th><center>Gender</center></th>
            <th><center>Available days</center></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software Engineering</td>
            <td>Siam Center</td>
            <td>250 ฿/hr</td>
            <td><img width="25px" height="25px" src={male} /></td>
            <td>
            <Pagination size="sm">
        
        <PaginationItem active>
          <PaginationLink href="#">
            MO
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            TU
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            WE
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            TH
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            FR
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            SA
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            SU
          </PaginationLink>
        </PaginationItem>
        
        </Pagination>
            </td>
            <td><Button size="sm" color="warning">more info</Button></td>
          </tr>
          
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
            <td><Button size="sm" color="warning">more info</Button></td>
          </tr>

        </tbody>
      </Table>
          
          
          </Col>

          <Col xs= "3"> 
          <Row><br /></Row>
          <Row><font size='3' color='#4d5b68'> &nbsp;&nbsp;&nbsp; Quering Tags</font><br /></Row>
          <br/ >
          <Card>
        <CardBody>
          <br/>Tag1
          <br/>Tag2
          <br/>Tag3
          <br/>Tag4
          <br/>Tag5
          <Row><br /></Row>
        </CardBody>
      </Card>

      <br/><Button color="danger">Reset</Button> &nbsp;&nbsp;&nbsp; <Button color="info">Re-search</Button>
          <br/>
          
          
          </Col>
        </Row>
        </Container>

      
      </div>
    )
  }
}

/*  <header className="Search-header">
          <img src={logo} className="React-logo" alt="logo" />
          <h1 className="Search-title">Search | TutorS</h1>
        </header>
        <p className="Search-intro">
            Hello, This is search page.
        </p>
        */
export default Search;