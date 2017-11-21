import React, { PropTypes, Component } from 'react';

import axios from 'axios';
import './style.css';
import bookshelf from '../../materials/bookshelf.jpg';

import TopComponent from '../TopComponent';
import ProgressBar1 from './ProgressBar1';
import ProgressBar2 from './ProgressBar2';
import TypeSelection from './TypeSelection';
import FillForm from './FillForm';

import { Link } from 'react-router-dom'

export default class AfterRegister extends Component {
  constructor(){
    super();
    this.handleUserType=this.handleUserType.bind(this)
    this.state = {
      userType: '',
    }
  }

  handleUserType(e){
    if(e.target.id === 'tutor'){
      this.setState({
        userType: 'tutor'
      })
    } else if(e.target.id === 'learner'){
      this.setState({
        userType: 'learner'
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="AfterRegister">
        <TopComponent />
        <br />
        { this.state.userType === '' ? <ProgressBar1/> : <ProgressBar2/> }
        <div className="AfterRegister-Middle">
          { this.state.userType === '' ? <TypeSelection userType={this.state.userType} handleUserType={this.handleUserType} /> : <FillForm userType={this.state.userType}/> }
        </div>
        <div className="Bottom">
        </div>
      </div>
    )
  }
}