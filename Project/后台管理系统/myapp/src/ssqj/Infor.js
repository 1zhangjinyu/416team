import React, { Component } from 'react'
import './manage.css'
import {information,deleteuser,searchuser,adduser} from './actionCreators';
import {connect} from 'react-redux'

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
            bminew:'',
            goalweightnew:'',
            searchid:''
        }
    }
    // componentDidUpdate(props){
    //    this.btnadd();
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
    addweight=(e)=>{
        this.setState({weightnew:e.target.value})

    }
    addheight=(e)=>{
        this.setState({heightnew:e.target.value})

    }
    addsex=(e)=>{
        this.setState({sexnew:e.target.value})

    }
    addold=(e)=>{
        this.setState({oldnew:e.target.value})

    }
    addgoalweight=(e)=>{
        this.setState({goalweightnew:e.target.value})

    }
    searchChange=(e)=>{
        this.setState({searchid:e.target.value})

    }
    
    render(props){
        this.props.dispatch(information());
        // console.log(props);
        let i=0;
        // console.log(props.information);
        // let newdata={
        //     username:this.state.inpuser
        // }
        let searchid=this.state.searchid;
        // console.log(searchid);
        let adddata={
            idnew:this.state.idnew,
            usernamenew:this.state.usernamenew,
            psdnew:this.state.psdnew,
            heightnew:Number(this.state.heightnew),
            weightnew:Number(this.state.weightnew),
            sexnew:this.state.sexnew,
            oldnew:Number(this.state.oldnew),
            bminew:Number(this.state.bminew),
            goalweightnew:Number(this.state.goalweightnew)
        }
        // console.log(this.props.information)
    return (
        <div className="inforContainer">
            <div className="daohanglan"> 用户管理 {'>'} 基本信息</div>
            <input placeholder="输入你想搜索的用户id" style={{marginTop:"155px",marginLeft:"300px",height:'30px'}} value={this.state.searchid} onChange={this.searchChange}></input>
            <button onClick={()=>{
                this.props.dispatch(searchuser(searchid));
                searchuser();
                setTimeout(()=>{
                    this.props.history.push({
                        pathname:'/detail',
                        data:this.props.targetuser
                })
            },1000);
                
            }} className="sousuo">搜索</button>
            <table border="1px" cellspacing="0px" width="100%">
                <tr style={{backgroundColor:'rgba(231,229,229,0.795)'}}>
                    <th width="30">id</th>
                    <th width="50">用户名</th>    
                    <th width="50">密码</th>
                    <th width="100">操作</th>

                </tr>
                {information()}
                {this.props.information.map((item)=>{
                    //  if(this.id===this.props.targetuser.id)
                    // //  {
                    // //     let tr=document.getElementsByTagName("tr");
                    // //     tr.style.backgroundColor="rgba(231,229,229,0.795)"
                    // // }
                    // {
                    //     return <tr style={{backgroundColor:'rgba(231,229,229,0.795)'}}>
                    //         <td>1</td>
                    //         </tr>
                    // }

                    i++;
                    return<tr>
                        {/* {()=>{
                            if(this.props.targetuser.username===item.username){
                                document.getElementsByTagName("tr").style.backgroundColor="rgba(231,229,229,0.795)"
                            }
                        }} */}
                        <td>{i}</td>
                        <td>
                            {item.username} 
                        </td>
                        <td>
                            {item.psd}
                        </td>
                        <td>
                            <button onClick={()=>{
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
                            //    console.log(deleteid);
                                alert("删除成功")
                            }} className="three">删除用户</button>
                        </td>
                        </tr>
                      
                })}
           
            </table>
            <div style={{marginTop:"20px",marginLeft:"300px",display:"none"}} id="tianjia">
            <p>id:<input value={this.state.idnew} onChange={this.addid}/>
            用户名:<input value={this.state.usernamenew} onChange={this.addusername}/></p>
            <p>密码:<input value={this.state.psdnew} onChange={this.addpsd}/>
            身高:<input value={this.state.heightnew} onChange={this.addheight}/></p>
            <p>体重:<input value={this.state.weightnew} onChange={this.addweight}/>
            性别:<input value={this.state.sexnew} onChange={this.addsex}/></p>
            <p>年龄:<input value={this.state.oldnew} onChange={this.addold}/>
            BMI:<input value={this.state.bminew} onChange={this.addbmi}/></p>
            目标体重:<input value={this.state.goalweightnew} onChange={this.addgoalweight}/>
            类型:
            <select><option>--请选择--</option><option>减重</option><option>增重</option><option>塑形</option></select>
            <button onClick={()=>{
                this.props.dispatch(adduser(adddata));
                information();
                if(this.props.adduser=='no'){
                    alert('添加失败，必须指定id')
                }else{
                    alert('添加成功')
                }
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
    targetuser:state.target.targetuser,
    adduser:state.adduser.addres
    
}); 
export default  connect(mapStateToProps)(Infor);