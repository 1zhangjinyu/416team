import React, { Component } from 'react'
import {connect} from 'react-redux'
import './manage.css'
import Head from './head'
class Detail extends Component {
    // constructor(props){
    //     super();
    //     this.state={
    //         inpid:props.targetuser.id
    //     }
    // }
    // changeid(e){
    //     this.setState({inpid:e.target.value});
    // }
    render(props){
        const data=this.props.location.data;
        // console.log(data);
        // console.log(this.props.targetuser)
        // this.setState({
        //     inpid:this.props.location.data.id
        // });
        return (
            <div >
                <Head />
                <div className='bread'> 基本信息>详细信息</div>
                <div className="detail">
                <table border="1px" cellspacing="0px">
                <tr style={{backgroundColor:'rgba(231,229,229,0.795)'}}>
                    <th>id</th>
                <th>用户名</th><th>密码</th>
                <th>身高</th><th>体重</th>
                <th>性别</th><th>年龄</th>
                <th>BMI</th><th>目标体重</th>
                <th>类型</th>                     
                </tr>
                <tr>
                    <td>{data.id}</td>
                    {/* <td><input 
                        value={this.state.inpid}
                        onChange={this.changeid}
                    /></td> */}
                    <td>{data.username}</td>
                    <td>{data.psd}</td>
                    <td>{Math.floor(data.height*100)}</td>
                    <td>{data.weights}</td>
                    <td>{data.sex}</td>
                    <td>{data.age}</td>
                    <td>{data.bmi}</td>
                    <td>{data.goalweight}</td>
                    <td>{data.type}</td>
                 </tr>
                </table>
                </div>
                <button onClick={()=>{
                this.props.history.push('/infor');
                }} className="onebtn">返回上一级</button>
                <button>保存修改</button>
            
            
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    information:state.infor.users,
    // targetuser:state.target.targetuser
}); 
export default  connect(mapStateToProps)(Detail);