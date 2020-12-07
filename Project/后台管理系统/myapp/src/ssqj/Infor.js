import React, { Component } from 'react'
import './home.css'

import {information,deleteuser,searchuser,adduser} from './actionCreators';
import {connect} from 'react-redux'
import Head from './head'
class Infor extends Component {
    constructor(props){
        super();
        this.state={
            idnew:'',
            usernamenew:'',
            psdnew:'',
            heightnew:'',
            weightnew:'',
            sexnew:'',
            oldnew:'',
            bminew:''
        }
    }
    // componentDidUpdate(props){
    //     console.log(this.props)
    //     this.setState={
    //         inpsd:props.information.item.psd,
    //         inpuser:props.information.item.username,
    //     }
    // }
    addid=(e)=>{
        this.setState({idnew:e.target.value})
    }
    addusername=(e)=>{
        this.setState({usernamenew:e.target.value})

    }
    addpsd=(e)=>{
        this.setState({psdnew:e.target.value})

    }
    render(props){
        this.props.dispatch(information());
        // console.log(props);
        let i=0;
        // console.log(props.information);
        let newdata={
            username:this.state.inpuser
        }
        let searchid=this.state.searchid;
        // console.log(searchid);
        let adddata={

        }
    return (
        <div className="inforContainer">
            <Head />
            <div className="bread"> 用户管理 {'>'} 基本信息</div>
            <input placeholder="输入你想搜索的用户id" style={{marginTop:"55px",marginLeft:"300px",height:'30px'}} value={this.state.searchid} onChange={this.searchChange}></input>
            <button onClick={()=>{
                this.props.dispatch(searchuser(searchid));
                setTimeout(()=>{
                    this.props.history.push({
                        pathname:'/detail',
                        data:this.props.targetuser
                })
                // this.props.dispatch(targetuser)
            },1000);
            }} className="sousuo">搜索</button>
            <div className="infor">
            <table border="1px" cellspacing="0px" >
                <tr>
                    <th >id</th>
                    <th >用户名</th>    
                    <th >密码</th>
                    <th style={{width:'350px'}} >操作</th>

                </tr>
                
                {this.props.information.map((item)=>{

                    i++;
                    return<tr>
                               
                        <td>{i}</td>
                        <td>
                            {item.username} 
                        </td>
                        <td>
                            {item.psd}
                        </td>
                        <td>
                            <button onClick={()=>{
                                // let hid=document.getElementById("hid");
                                // hid.style.display="block";
                                this.props.history.push({
                                    pathname:'/detail',
                                    data:item
                                })
                            }} className="three">展开</button>
                           <button onClick={()=>{
                                this.props.history.push({
                                    pathname:'/detail',
                                    data:item
                                })
                            }} className="three">修改信息</button>
                           <button onClick={()=>{
                               let deleteid=item.id;
                               this.props.dispatch(deleteuser(deleteid));
                               console.log(deleteid);
                            }} className="three">删除用户</button>
                        </td>
                        </tr>
                        {/* <tr style={{display:"none",position:"absolute",marginTop:"200px",marginLeft:"0px"}} id="hid"><div >
                                    <tr><th>用户名</th><th>密码</th><th>身高</th><th>体重</th><th>性别</th><th>年龄</th><th>BMI</th><th>目标体重</th><th>类型</th></tr>
                                    <tr>
                                        <td><input value={item.username}/></td>
                                        <td><input value={item.psd}/></td><td><input value={item.height}/></td><td><input value={item.weight}/></td><td><input value={item.sex}/></td><td><input value={item.age}/></td><td><input value={item.goalweight}/></td><td><input value={item.type}/></td>
                                    </tr>
                                    <button onClick={()=>{
                                        this.props.dispatch(updateuser(newdata));
                                    }}>保存修改</button>
                                    
                                </div>
                        </tr> */}
                })}
            {/* <tr style={{display:"hidden"}}><td><input /></td>
            <td><input /></td><td><input /></td><td><input /></td>
            </tr> */}
            </table>
            </div>
            <div style={{marginTop:"20px",marginLeft:"300px",display:"none"}} id="tianjia">
            <p>id:<input value={this.state.idnew} onChange={this.addid}/>
            用户名:<input value={this.state.usernamenew} onChange={this.addusername}/></p>
            <p>密码:<input value={this.state.psdnew} onChange={this.addpsd}/>
            身高:<input value={this.state.heightnew} onChange={this.addheight}/></p>
            <p>体重:<input value={this.state.weightnew} onChange={this.addweight}/>
            性别:<input value={this.state.sexnew} onChange={this.addsex}/></p>
            <p>年龄:<input value={this.state.oldnew} onChange={this.addold}/>
            BMI:<input value={this.state.bminew} onChange={this.addbmi}/></p>
            类型:
            <select><option>--请选择--</option><option>减重</option><option>增重</option><option>塑形</option></select>
            <button onClick={()=>{
               this.props.dispatch(adduser(adddata));

            }}>确认添加</button>
            </div>


            <button style={{marginTop:"20px" ,marginLeft:"300px" }}
            onClick={()=>{
                let tianjia=document.getElementById('tianjia');
                tianjia.style.display="block";
               
            }}
            >添加用户</button>
             
        </div>
    )
}
}
const mapStateToProps=(state)=>({
    information:state.infor.users,
    targetuser:state.target.targetuser
    
}); 
export default  connect(mapStateToProps)(Infor);