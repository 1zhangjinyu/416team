import React, { Component } from 'react'
import './manage.css'
import {connect} from 'react-redux'
import { manager, managerdetail ,changeManager} from './actionCreators'



class Manager extends Component {
    constructor(props){
        super();
        this.state={
            inpname:props.managers.username,
            inppsd:props.managers.password
        }    
    }   
    nameChange=(e)=>{
        this.setState({inpname:e.target.value})
    }
    psdChange=(e)=>{
        this.setState({inppsd:e.target.value})
    }
    // keepChange=()=>{

    // console.log(this.props.managers);

    // }

    render(){
    
        // console.log(this.props.managers);
        let updata={username:this.state.inpname,
                password:this.state.inppsd,
                id:this.props.managers.id,
        }
        console.log(updata);
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
                    <span className="managerUser">用户名:</span>
                    <input className="managerUsename" 
                    type="text"
                    // placeholder={this.props.managers.username}
                    value={this.state.inpname}
                    onChange={this.nameChange}
                   
                    ></input>
                    <span className="loginTime">登录时间:{Date.now()}</span>
                    <span className="managerPsd">更改密码:</span>
                    <input 
                    value={this.state.inppsd}
                    onChange={this.psdChange}
                    type="text" className="managerPassword"
                    
                    ></input>
                    <button className="keep" onClick={()=>{
                        this.props.dispatch(changeManager(updata));
                        setTimeout(()=>{
                            alert('修改成功');},2000);
                    }}>保存</button>
                </div>
            </div>           
        </div>
    )
    }
}
const mapStateToProps=(state)=>({
    // managerdetail:state.manager.managerdetail,
    managers:state.login.managers,
    // upmanager:state.manager.upmanager
}); 

export default  connect(mapStateToProps)(Manager);
