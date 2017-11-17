import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './ui/components/search';
import Home from './ui/components/home';
import Example from './ui/components/example';
import NotFound from './ui/components/NotFound'

import axios from 'axios';
import { history } from './global/history';
const urlSearch= 'http://localhost:3030/query?tags=';

export default class App extends Component {
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
    
      handleSubmit(e){
        if(history.location.pathname==='/'){
            history.push('/search')
        }
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
        let tmp= e.target.name.toLowerCase()
        let t = this.state.search.length > 0 ? '+' + tmp : tmp
        let url = this.state.url + t
        this.setState({
          search: this.state.search.includes(tmp) ? [...this.state.search] : [...this.state.search,tmp],
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
        console.log(this.state)
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
          if(e.target.name===undefined){
            for(let i=0;i<modal.length;i++){
              modal[i]=false;
            }
            this.setState({
              modal: modal
            })
          }
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
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path ='/' render = {() => {
                        return (
                            <Home
                                value={this.state.value}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        )
                    }} />
                    <Route path = "/search" render = {() => {
                        return (
                            <Search
                                state={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                handleClick={this.handleClick}
                                handleReset={this.handleReset}
                                handleClickHelper={this.handleClickHelper}
                                toggle={this.toggle}
                            />
                        )
                    }} />
                    <Route path = "/ex" component = {Example} />
                    <Route component = {NotFound} />
                </Switch>
            </div>
        )
    }
}