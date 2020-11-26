import React, { Component } from 'react'
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import './style.css';
import Weight from './Weight';
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            inpName:'',
            inpPsd:''
        }
    }
    nameChange = (e)=>{
        this.setState({inpName:e.target.value})
    }
    psdChange = (e)=>{
        this.setState({inpPsd:e.target.value})
    }
    
    sub=()=>{
        let data = {username:this.state.inpName,password:this.state.inpPsd};
        fetch('https://www.hmyyz.top:8087/', {
            method: 'POST', 
            mode:'cors',
            body: JSON.stringify(data), 
                
        })
        .then(function(res){return res.text()})
        .catch(error => console.error('Error:', error))
        .then(function(res){
            return res;
        });
    }

    render(){
      this.props.history.push('/weight');
      
        return (
            <div className="login">
                <img src={require('./image/logo.jpg')} className="login-img"/>
                <p>记录你的体重变化，建立你的健康档案</p>
                <form id="form">
                    <input 
                        type="text" 
                        name="username" 
                        value={this.state.inpName} 
                        onChange={this.nameChange}
                        placeholder="请输入用户名"></input>
                    <input 
                        type="password" 
                        name="password" 
                        value={this.state.inpPsd}
                        onChange={this.psdChange} 
                        placeholder="请输入密码"></input>
                </form>
                <button onClick={this.sub}>登录/注册</button>
            </div>
        )
    }
}
