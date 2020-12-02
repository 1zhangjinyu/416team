import React, { Component } from 'react'
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import './style.css';
import {connect} from 'react-redux';
import {login} from './actionCreators';
class Login extends Component {
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
//    sub=()=>{
//             let data = {username:this.state.inpName,password:this.state.inpPsd};
//             // return (dispatch)=>{
//                 fetch('https://www.hmyyz.top:8089/', {
//                 method: 'POST', 
//                 mode:'cors',
//                 body: JSON.stringify(data),       
//             })
//             .then(function(res){return res.text()})
//             .catch(error => console.error('Error:', error))
//             .then(function(res){
//                 console.log(res);
//                 // return dispatch({
//                 //     type:'LOGIN',
//                 //     user:res
//                 // });
//             });
//         // }
//         }
      
    render(){
        let data = {username:this.state.inpName,password:this.state.inpPsd};
        console.log(this.props.user)
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
                <button onClick={()=>{
                    //this.props.history.push('/weight')
                    return this.props.dispatch(login(data));
                }}>注册</button>
                <button onClick={()=>{
                    this.props.dispatch(login(data));
                    setTimeout(()=>{
                        if(this.props.user==false){
                            alert("123")
                            return ;
                        }
                        else{
                            this.props.history.push('/home');
                        }
                    },5000)
                    //this.props.history.push('/home')
                    return ;
                }}>立即登录</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    user:state.login.user
})
export default connect(mapStateToProps)(Login)