import React, { Component } from 'react'
import {connect} from 'react-redux'
import './manage.css'
import {updateuser} from './actionCreators'

class Detail extends Component {
    constructor(props){
        const data=props.location.data;
        super();
        this.state={
            inpid:data.id,
            inpusername:data.username,
            inppsd:data.psd,
            inpheight:data.height,
            inpweights:data.weights,
            inpsex:data.sex,
            inpage:data.age,
            inpbmi:data.bmi,
            inpgoalweight:data.goalweight,
            inptype:data.type

        }
    }
    changeid=(e)=>{
        this.setState({inpid:e.target.value});
    }
    changeusername=(e)=>{
        this.setState({inpusername:e.target.value});
    }
    changepsd=(e)=>{
        this.setState({inppsd:e.target.value});
    }
    changeheight=(e)=>{
        this.setState({inpheight:e.target.value});
    }
    changeweights=(e)=>{
        this.setState({inpweights:e.target.value});
    }
    changesex=(e)=>{
        this.setState({inpsex:e.target.value});
    }
    changeage=(e)=>{
        this.setState({inpage:e.target.value});
    }
    changebmi=(e)=>{
        this.setState({inpbmi:e.target.value});
    }
    changegoalweights=(e)=>{
        this.setState({inpgoalweight:e.target.value});
    }
    changetype=(e)=>{
        this.setState({inptype:e.target.value});
    }
    render(props){
        const data=this.props.location.data;
        let updateData={
            oldid:data.id,
            id:Number(this.state.inpid),
            username:this.state.inpusername,
            psd:this.state.inppsd,
            height:this.state.inpheight,
            weights:this.state.inpweights,
            sex:this.state.inpsex,
            age:this.state.inpage,
            bmi:this.state.inpbmi,
            goalweight:this.state.inpgoalweight,
            type:this.state.inptype

        }   
        return (
            <div style={{width:'80%',marginTop:"120px",marginLeft:'250px',position:'absolute'}} >
                <table border="1px" cellspacing="0px" width="100%" >
                <tr style={{backgroundColor:'rgba(231,229,229,0.795)'}}>
                    <th>id</th>
                <th>用户名</th><th>密码</th>
                <th>身高</th><th>体重</th>
                                   
                </tr>
                <tr>
                    <td><input value={this.state.inpid} onChange={this.changeid}/></td>
                    <td><input value={this.state.inpusername} onChange={this.changeusername}/></td>
                    <td><input value={this.state.inppsd} onChange={this.changepsd}/></td>
                    <td><input value={this.state.inpheight} onChange={this.changeheight}/></td>
                    <td><input value={this.state.inpweights} onChange={this.changeweights}/></td>
                </tr>
                <tr style={{backgroundColor:'rgba(231,229,229,0.795)'}}>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>BMI</th><th>目标体重</th>
                    <th>类型</th>  
                </tr>
                <tr>
                     {/* <td><input 
                        value={this.state.inpid}
                        onChange={this.changeid}
                    /></td> */}
                    <td><input value={this.state.sex} onChange={this.changesex}/></td>
                    <td><input value={this.state.inpage} onChange={this.changeage}/></td>
                    <td><input value={this.state.inpbmi} onChange={this.changebmi}/></td>
                    <td><input value={this.state.inpgoalweight} onChange={this.changegoalweights}/></td>
                    <td><input value={this.state.inptype} onChange={this.changetype}/></td>
                 </tr>
                </table>
                <button onClick={()=>{
                this.props.history.push('/infor');
                }} className="onebtn">返回上一级</button>
                <button onClick={()=>{
                    this.props.dispatch(updateuser(updateData));
                    setTimeout(() => {
                    console.log(this.props.ifok)
                        if(this.props.ifok==='ok'){
                            alert("修改成功")
                        }else{
                            alert("id唯一分配，不能修改")
                        }
                    }, 50);
                    
                }}>保存修改</button>
            
            
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    information:state.infor.users,
    ifok:state.changeuser.ifok
    // targetuser:state.target.targetuser
}); 
export default  connect(mapStateToProps)(Detail);