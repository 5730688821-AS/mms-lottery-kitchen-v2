import React, { Component } from 'react';
import male from '../../materials/male_sm.png';
import female from '../../materials/female_sm.png';
import brown from '../../materials/brown.png';

import { Container, Row, Col, Button, Table, Card, CardBody, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';
import TopComponent from '../TopComponent';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <TopComponent
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          value={this.props.state.value}
        />
        <SearchResultHeader handleClickHelper={this.props.handleClickHelper} />
        <hr className="my-2" />

        <Container>
          <Row>
            <Col xs= "10">
              <Row><br /></Row>
              <Row><Col xs="3"><h5> {this.props.state.data.length>0 ? this.props.state.data.length : '0'} course results </h5></Col></Row>
              <Row><br /></Row>
              <Table responsive>
                <thead>
                  <GenerateHeaderTable />
                </thead>
                <tbody>
                  <GenerateSearchResult data={this.props.state.data} modal={this.props.state.modal} toggle={this.props.toggle} />
                </tbody>
              </Table>
            </Col>
            <GenerateQueringTag search={this.props.state.search} handleClick={this.props.handleClick} handleReset={this.props.handleReset} />
          </Row>
        </Container>
      </div>
    )
  }
}

const SearchResultHeader = (props) => {
  return(
    <Container>
      <Row><br /></Row>
      <Row>
        <br />
        <Col xs="1"></Col>
          <font size='3' color='#4d5b68'> Tags Helper:&nbsp;&nbsp;</font> 
          <div>
            <Button name='สยาม' onClick={props.handleClickHelper} size = 'sm'>สยาม</Button>&nbsp;&nbsp;&nbsp;
            <Button name='MBK' onClick={props.handleClickHelper} size = 'sm'>MBK</Button>&nbsp;&nbsp;&nbsp;
            <Button name='คณิตศาสตร์' onClick={props.handleClickHelper} size = 'sm'>คณิตศาสตร์</Button>&nbsp;&nbsp;&nbsp;
            <Button name='English' onClick={props.handleClickHelper} size = 'sm'>English</Button>&nbsp;&nbsp;&nbsp;
            <Button name='ม.ปลาย' onClick={props.handleClickHelper} size = 'sm'>ม.ปลาย</Button>&nbsp;&nbsp;&nbsp;
            <Button name='female' onClick={props.handleClickHelper} size = 'sm'>female</Button>&nbsp;&nbsp;&nbsp;
            <Button name='ผู้ชาย' onClick={props.handleClickHelper} size = 'sm'>ผู้ชาย</Button>&nbsp;&nbsp;&nbsp;
            <Button name='สามย่าน' onClick={props.handleClickHelper} size = 'sm'>สามย่าน</Button>&nbsp;&nbsp;&nbsp;
            <Button name='SE' onClick={props.handleClickHelper} size = 'sm'>SE</Button>&nbsp;&nbsp;&nbsp;
            <Button name='จันทร์' onClick={props.handleClickHelper} size = 'sm'>จันทร์</Button>&nbsp;&nbsp;&nbsp;
            <Button name='ทุกวัน' onClick={props.handleClickHelper} size = 'sm'>ทุกวัน</Button>&nbsp;&nbsp;&nbsp;
            <Button name='วันหยุด' onClick={props.handleClickHelper} size = 'sm'>วันหยุด</Button>&nbsp;&nbsp;&nbsp;
            
          </div>
        
      </Row>
    </Container>
  )
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

const GenerateSearchResult = (props) => {
  const day = ['MO','TU','WE','TH','FR','SA','SU']
  

  let tableGen =[]
  if(props.data.length>0){

  props.data.map((data,index) => {

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
          <Button name={index} color="warning" size="sm" onClick={props.toggle}>more info</Button>
          <Modal name={index} isOpen={props.modal[parseInt(index)]} toggle={props.toggle}>
            <ModalHeader name={index} toggle={props.toggle}>
            <font size='2' color='#4d5b68'> Offer id: {data.cid}</font> <br />
              {data.cname_en} - {data.cname_th} <br /> <font size='4'>ระดับ: {data.level}</font>
            </ModalHeader>
            <ModalBody>
              <Container>
              <Row>
              
              <Col xs= "7">
                ผู้สอน: <b>{data.tutor}</b>
                <font size='2' color='#4d5b68'> ({data.tid})</font><br />
                <br />
                <br />
                <u>ข้อมูลติดต่อ</u><br />
                {data.username}<br />
                โทรศัพท์: {data.tel} <br /><br />
              </Col>
              <Col xs= "4">
              <img width="140px" height="150px" src={brown} />
              </Col>
              </Row>
              </Container>
                <center><i><font size = '2' color='#4d5b68'>{data.desc}</font></i></center>
            </ModalBody>
            <ModalFooter>
              <Button name={index} color="primary" onClick={props.toggle}>Book Now</Button>{' '}
              <Button name={index} color="secondary" onClick={props.toggle}>Cancel</Button>
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

const GenerateQueringTag = (props) => {
  console.log(props)
  let elem = []
  
  props.search.map((val,index) =>
    elem = [
              ...elem,
              <br key={val}/>,<Button
                key={index}
                name={index}
                color='success'
                size='sm'
                onClick={props.handleClick}
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
      <br/><Button onClick={props.handleReset} size= "sm">Reset</Button>
      <br/>
    </Col>
  )
}