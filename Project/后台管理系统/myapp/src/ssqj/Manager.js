import React, { Component } from 'react'
import './manage.css'
import {connect} from 'react-redux'
import { manager, managerdetail ,changeManager} from './actionCreators'
import Head from './head'



class Manager extends Component {
    constructor(props){
        super();
        this.state={
            inpname:props.managers.username,
            inppsd:props.managers.password,
            imgsrc:''
        } 

    }   
    // componentDidUpdate(){
    //      updata={
    //         username:this.state.inpname,
    //         password:this.state.inppsd,
    //         id:this.props.managers.id,
    //         imgsrc:  document.getElementById("show").src
    //     }
    // }
    nameChange=(e)=>{
        this.setState({inpname:e.target.value})
    }
    psdChange=(e)=>{
        this.setState({inppsd:e.target.value})
    }
   changepic(props){
        var reads=new FileReader();  
        var f=document.getElementById("uploadImg").files[0];
        reads.readAsDataURL(f);
        reads.onload=function(t){
            document.getElementById("show").src=this.result;
            console.log(typeof(this.result));
            // console.log( document.getElementById("show").src);
            let updata={id:props.managers.id,
                imgsrc: document.getElementById("show").src
            };
            console.log(updata)
            fetch('https://www.liucl.xyz:3745/changeManager',{
                method:'POST',
                mode:'cors',
                body:JSON.stringify(updata) 
            })
            .then(function(res){return res.text()})
            .then(res=>{
                props.dispatch({
                    type:'CHANGEMANAGER',
                    upmanager:res
            })
        });
        };
        // console.log(e)
        // e.setState({imgsrc:document.getElementById("show").src});  
   }

    render(){
        let updata={
            username:this.state.inpname,
            password:this.state.inppsd,
            id:this.props.managers.id,
        }
        console.log(updata)
        // let bytes=new Uint8Array(this.props.managers.img.data);
        // let data='';
        // let len=bytes.byteLength;
        // for(let i=0;i<len;i++){
        //     data+=String.fromCharCode(bytes[i]);
        // }
        // let imgsrc1="data:image/png;bases64,"+window.btoa(data);
        // console.log(imgsrc1)
        
    return (
        <div className="managerBig">
            <Head/>
            
            <div className="managerContainer">
                <img src={"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=121945471,1384115586&fm=26&gp=0.jpg"}/>
                <span>我的账户</span>
                <div className="managerMsg"><p>基本信息</p></div>
                <div className="msgForm">
                    <span className="managerHead"> 头像:</span>
                    <img id="oldimg" src={this.props.managers.img} style={{marginLeft:'90px'}}/>
                    <img src="" value={this.state.imgsrc} id="show"  style={{marginLeft:'90px'}}/>
                    <form action="post" enctype="multipart/form-data">
                        <input type="file"   accept="image/png, image/jpeg, image/gif, image/jpg" className="changePic" value='' id="uploadImg" 
                         onChange={()=>{this.changepic(this.props)}}/>
                        
                    </form>
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
    managers:JSON.parse(state.login.managers),
    // upmanager:state.manager.upmanager
}); 

export default  connect(mapStateToProps)(Manager);
