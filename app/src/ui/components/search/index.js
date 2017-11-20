import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap'

// Style
import './style.css';


//Components
import TopComponent from '../TopComponent';
import SearchHelper from './SearchHelper';
import SearchResult from './SearchResult';
import QueringTag from './QueringTag';

class Search extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Search">
        <TopComponent />
        <SearchHelper />
        <hr className="my-2" />

        <Container>
          <Row>
            <Col xs= "10">
              <Row><br /></Row>
              <Row><Col xs="3"><h5> {this.props.data.length>0 ? this.props.data.length : '0'} course results </h5></Col></Row>
              <Row><br /></Row>
              <Table responsive>
                <thead>
                  <GenerateHeaderTable />
                </thead>
                <tbody>
                  <SearchResult />
                </tbody>
              </Table>
            </Col>
            <QueringTag />
          </Row>
        </Container>
      </div>
    )
  }
}

const GenerateHeaderTable = () =>{
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
function mapStateToProps(state){
  return {
    data: state.search.data,
  }
}

export default connect(mapStateToProps)(Search);