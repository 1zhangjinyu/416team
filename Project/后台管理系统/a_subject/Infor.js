import React, { Component } from 'react'
import './manage.css'
import {information,deleteuser} from './actionCreators';
import {connect} from 'react-redux'

class Infor extends Component {
    constructor(){
        super();
        this.state={
            inpuser:'',
            inpsd:''
        }
    }
    render(props){
    this.props.dispatch(information());
    // console.log(props);
    let i=0;
    // console.log(props.information);
    return (
        <div className="inforContainer">
            <div className="daohanglan"> 用户管理 {'>'} 基本信息</div>
            <input placeholder="输入你想搜索的用户id" style={{marginTop:"55px",marginLeft:"300px"}}></input>
            <button>搜索</button>
            <table border="1px" cellspacing="0px" width="100%">
                <tr>
                    <th width="50">id</th>
                    <th width="80">用户名</th>    
                    <th width="80">密码</th>
                    <th width="120">操作</th>

                </tr>
                {this.props.information.map((item)=>{
                    i++;
                    return<tr>
                        <td>{i}</td>
                        <td><input value={item.username} />
                        </td>
                        <td>
                            <input value={item.psd}/>
                        </td>
                        <td>
                           <button>展开</button>
                           <button>修改信息</button>
                           <button>保存修改</button>
                           <button onClick={()=>{
                               let deleteid=item.id;
                               this.props.dispatch(deleteuser(deleteid));
                               console.log(deleteid);
                            }}>删除用户</button>
                        </td>
                        </tr>
                })}
            <button style={{marginTop:"5px" ,marginLeft:"5px" ,marginBottom:"5px"}}>添加用户</button>
            </table>
             
        </div>
    )
}
}
const mapStateToProps=(state)=>({
    information:state.infor.users,
    
}); 

export default  connect(mapStateToProps)(Infor);