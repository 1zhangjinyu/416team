import React, { Component } from 'react'
import './manage.css'
import {manager} from './actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



class Login extends Component {
    constructor(){
        super();
        this.state={
            inpname:this.props.managers.username,
            inppsd:this.props.managers.username
        }    
    }   
    // componentDidMount(props){
    //     console.log(props)
    //         if(this.props.managers.id){
    //             this.props.history.push('/home');
    //         }else{
    //              alert('用户名或密码错误');
    //         }    
        
    // }
    
    nameChange=(e)=>{
        this.setState({inpname:e.target.value})
    }
    psdChange=(e)=>{
        this.setState({inppsd:e.target.value})
    }

    render() { 
        //  console.log(this.props)
        let data={username:this.state.inpname,password:this.state.inppsd};
        return (
            <div className="login-big" >
                <div className="container">
                    <div className="imgBox">
                        <img src={"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1708858739,3895159754&fm=26&gp=0.jpg"} />
                    </div>
                    <div className="inputForm">
                        <p className="toptxt">擅食轻减后台管理系统</p>
                        <input 
                        className="user" 
                        type="text" 
                        placeholder="username" 
                        // onBlur={this.inputSub}
                        value={this.state.inpname}
                        onChange={this.nameChange}
                        />
                        <input
                        className="psd" 
                        type="password" placeholder="password" 
                        // onBlur={this.inputSub1}
                        value={this.state.inppsd}
                        onChange={this.psdChange}
                        />
                        <button className="loginBtn" onClick={(e)=>{      
                            this.props.dispatch(manager(data));
                            setTimeout(()=>{
                                // this.props.dispatch(manager(data));
                                if(this.props.managers==false){
                                    alert('用户名或密码有误');
                                    return ;
                                }else{
                                    this.props.history.push('/manager');
                                }
                            },500);
                        }
                        }>登录</button>
                        <p className="bottomtxt">登录擅食轻减官方管理账号 welcome login our management system</p>
                    </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    managers:state.login.managers
});

const view=connect(mapStateToProps) (Login);
export default withRouter(view);


