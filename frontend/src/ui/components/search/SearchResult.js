import React, { Component } from 'react'
import { Button, Container, Row, Col, PaginationItem, PaginationLink, Pagination, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';

// Material
import male from '../../materials/male_sm.png';
import female from '../../materials/female_sm.png';
import brown from '../../materials/brown.png';


class SearchResult extends Component{

    constructor(){
        super();
        this.toggle=this.toggle.bind(this);
        this.state = {
            modal: []
        }
    }

    toggle(e) {
        let modal = this.state.modal
        if(e!==undefined){
          if(e.target.name===undefined){
            for(let i=0;i<modal.length;i++){
              modal[i]=false;
            }
            this.setState({modal})
          }
          const idx = parseInt(e.target.name, 10)
          modal[idx]=!modal[idx]
          this.setState({modal})
        } else {
          for(let i=0;i<modal.length;i++){
            modal[i]=false;
          }
          this.setState({modal})
        }
    }

    render(){
        const day = ['MO','TU','WE','TH','FR','SA','SU']
        
      
        let tableGen =[]
        console.log(this.state.modal)
        if(this.props.data.length>0){
      
            this.props.data.forEach((data,index) => {
        
                let elem = []
                let activeDay = [false,false,false,false,false,false,false]
                for(let i=0;i<data.adays[0].length;i++){
                    activeDay[data.adays[0][i]-1]=true;
                }
                
                day.forEach((day,idx) => {
                    elem=[
                    ...elem,
                    <PaginationItem key={idx} active={activeDay[idx]}>
                        <PaginationLink href="#">
                        {day}
                        </PaginationLink>
                    </PaginationItem>
                    ]
                })
                console.log(this.state.modal[parseInt(index, 10)])
                tableGen=[
                    ...tableGen,
                    (<tr key={data._id}>
                    <td>{data.cname_en}</td>
                    <td>{data.loc}</td>
                    <td>{data.cost + ' ฿/hr'}</td>
                    <td><img width="25px" height="25px" alt={data.gender === 'male' ? 'male':'female'} src={data.gender === 'male' ? male: female} /></td>
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
                        <Modal name={index} isOpen={this.state.modal[parseInt(index, 10)]} toggle={this.toggle}>
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
                            {data.username}<br />
                            โทรศัพท์: {data.tel} <br /><br />
                            </Col>
                            <Col xs= "4">
                            <img width="140px" height="150px" alt={brown} src={brown} />
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
}

function mapStateToProps(state){
    return{
        data: state.search.data,
    }
}

export default connect(mapStateToProps)(SearchResult);