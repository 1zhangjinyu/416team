import React, { Component,useState } from 'react';
import '../css/style.css';
import {connect} from 'react-redux';
import {login} from '../actionCreators';
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
    render(){
        let data = {username:this.state.inpName,password:this.state.inpPsd};
        console.log(this.props.user)
        return (
            <div className="login">
                <img src={require('../image/ssqj.png')} className="login-img"/>
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
                    this.props.dispatch(login(data));
                    setTimeout(()=>{
                        if(this.props.user===false){
                            alert("用户名或密码错误");
                            return ;
                        }
                        else{
                            this.props.history.push('/weight');
                        }
                    },1000);
                    return ;
                }}>注册</button>
                <button onClick={()=>{
                    this.props.dispatch(login(data));
                    setTimeout(()=>{
                        if(this.props.user==false){
                            alert("用户名或密码错误")
                            return ;
                        }
                        else{
                            this.props.history.push('/home');
                        }
                    },1000)
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