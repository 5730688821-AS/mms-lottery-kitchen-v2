import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Button, Row, Col } from 'reactstrap';

// Action
import { click, fetch } from '../../../actions/searchAction';



class SearchHelper extends Component{
    constructor(){
        super();
        this.handleClickHelper=this.handleClickHelper.bind(this);
    }

    handleClickHelper(e){
        let tmp= e.target.name.toLowerCase()
        let t = this.props.search.length > 0 ? '+' + tmp : tmp
        let url = this.props.url + t
        this.props.click(
          this.props.search.includes(tmp) ? [...this.props.search] : [...this.props.search,tmp],
          url,
        )
        this.props.fetch(url)
      }

    render(){
        console.log(this.props)
        return(
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
    }
}

function mapStateToProps(state){
    return{
        search: state.search.search,
        url: state.search.url,
    }
}

function mapDispatchToProps(dispatch){
    return{
        click: (search,url) => dispatch(click(search,url)),
        fetch: (url) => dispatch(fetch(url)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchHelper);