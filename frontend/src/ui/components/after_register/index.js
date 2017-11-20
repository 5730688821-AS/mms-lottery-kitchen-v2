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
  render() {
    return (
      <div className="AfterRegister">
        <TopComponent />
        <br />
        <ProgressBar1/>
        {/* <ProgressBar2/> */}
        <div className="AfterRegister-Middle">
          <TypeSelection/>
          {/* <FillForm/> */}
        </div>
        <div className="Bottom">
        </div>
      </div>
    )
  }
}