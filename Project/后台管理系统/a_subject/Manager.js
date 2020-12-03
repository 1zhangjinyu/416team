import React, { Component } from 'react'
import './manage.css'
import {connect} from 'react-redux'
import { manager, managerdetail } from './actionCreators'



class Manager extends Component {
    keepChange=()=>{

    }

    render(){
        this.props.dispatch(managerdetail);
    return (
        <div className="managerBig">
            <div className="managerTop" >
                <p>Welcome!!</p>
            </div>
            <div className="managerContainer">
                <img src={"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=121945471,1384115586&fm=26&gp=0.jpg"}/>
                <span>我的账户</span>
                <div className="managerMsg">基本信息</div>
                <div className="msgForm">
                    <span className="managerHead"> 头像:</span>
                    <img src={this.props.managers.img} />
                    <button className="changePic">更换图片</button>
                    <span className="managerUser">用户名:{this.props.managers.username}</span>
                    <input className="managerUsename" palceholder="zhangsan"></input>
                    <span className="loginTime">登录时间:{Date.now()}</span>
                    <span className="managerPsd">更改密码:{this.props.managers.password}</span>
                    <input type="password" className="managerPassword"></input>
                    <button className="keep" onclick={this.keepChange}>保存</button>
                </div>
            </div>           
        </div>
    )
    }
}
const mapStateToProps=(state)=>({
    managerdetail:state.manager.managerdetail,
    managers:state.login.managers
}); 

export default  connect(mapStateToProps)(Manager);
