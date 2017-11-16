import React, { PropTypes, Component } from 'react';
import logo from '../../materials/react_logo.svg';
import male from '../../materials/male_sm.png';
import female from '../../materials/female_sm.png';
import brown from '../../materials/brown.png';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container, Row, Col, Jumbotron, Breadcrumb, BreadcrumbItem, Button, Table, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
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
    this.handleClickHelper=this.handleClickHelper.bind(this);
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
  
  handleClickHelper(e){
    console.log(e.target)
    let tmp= e.target.name
    let t = this.state.search.length > 0 ? '+' + tmp : tmp
    let url = this.state.url + t
    this.setState({
      search: this.state.search.includes(e.target.name) ? [...this.state.search] : [...this.state.search,tmp],
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
              <ModalHeader name={index} toggle={this.toggle}>
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
                  {data.email}<br />
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
                <Button name={index} color="primary" onClick={this.toggle}>Book Now</Button>{' '}
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
          <Col xs="1"></Col>
            <font size='3' color='#4d5b68'> Tags Helper:&nbsp;&nbsp;</font> 
            <div>
              <Button name='สยาม' onClick={this.handleClickHelper} size = 'sm'>สยาม</Button>&nbsp;&nbsp;&nbsp;
              <Button name='MBK' onClick={this.handleClickHelper} size = 'sm'>MBK</Button>&nbsp;&nbsp;&nbsp;
              <Button name='คณิตศาสตร์' onClick={this.handleClickHelper} size = 'sm'>คณิตศาสตร์</Button>&nbsp;&nbsp;&nbsp;
              <Button name='English' onClick={this.handleClickHelper} size = 'sm'>English</Button>&nbsp;&nbsp;&nbsp;
              <Button name='ม.ปลาย' onClick={this.handleClickHelper} size = 'sm'>ม.ปลาย</Button>&nbsp;&nbsp;&nbsp;
              <Button name='female' onClick={this.handleClickHelper} size = 'sm'>female</Button>&nbsp;&nbsp;&nbsp;
              <Button name='ผู้ชาย' onClick={this.handleClickHelper} size = 'sm'>ผู้ชาย</Button>&nbsp;&nbsp;&nbsp;
              <Button name='สามย่าน' onClick={this.handleClickHelper} size = 'sm'>สามย่าน</Button>&nbsp;&nbsp;&nbsp;
              <Button name='SE' onClick={this.handleClickHelper} size = 'sm'>SE</Button>&nbsp;&nbsp;&nbsp;
              <Button name='จันทร์' onClick={this.handleClickHelper} size = 'sm'>จันทร์</Button>&nbsp;&nbsp;&nbsp;
              <Button name='ทุกวัน' onClick={this.handleClickHelper} size = 'sm'>ทุกวัน</Button>&nbsp;&nbsp;&nbsp;
              <Button name='วันหยุด' onClick={this.handleClickHelper} size = 'sm'>วันหยุด</Button>&nbsp;&nbsp;&nbsp;
              
            </div>
          
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