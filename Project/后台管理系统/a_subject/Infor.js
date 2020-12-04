import React from 'react'
import './manage.css'
import {Information} from './actionCreators';
import {connect} from 'react-redux'

const Infor = (props) => {
    props.dispatch(Information);
    return (
        <div className="inforContainer">
            <div className="daohanglan"> 用户管理 {'>'} 基本信息</div>
            <input placeholder="输入你想搜索的用户id" style={{marginTop:"55px",marginLeft:"300px"}}></input>
            <button>搜索</button>
            <table border="1px" cellspacing="0px" width="100%">
                <tr>
                    <th width="50">id</th>
                    <th width="100">用户名</th>    
                    <th width="80">密码</th>
                    <th width="100">最近登录时间</th>
                    <th width="120">操作</th>

                </tr>
                <tr>
                    <td>1</td>
                    <td>zhangsan</td>
                    <td>123</td>
                    <td>2020.11.23</td>
                    <td><button>删除用户</button> &nbsp;
                        <button>详细信息</button>
                    </td>

                </tr>
                {/* <tr>
                    <td>2</td>
                </tr><tr>
                    <td>3</td>
                </tr><tr>
                    <td>4</td>
                </tr> */}
            <button style={{marginTop:"5px" ,marginLeft:"5px" ,marginBottom:"5px"}}>添加用户</button>
            </table>
            
        </div>
    )
}
const mapStateToProps=(state)=>({
    information:state.infodetail.information,
    
}); 

export default  connect(mapStateToProps)(Infor);
// export  default Infor;