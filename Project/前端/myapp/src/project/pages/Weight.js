import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../css/style.css';
import {connect} from 'react-redux';
import {sub} from '../actionCreators'

class Weight extends Component {
    constructor(props){
        super(props);
        this.state={
            inpSex:'this.props.infor.sex',
            inpWeight:'this.props.infor.weight',
            inpNew:'this.props.infor.goalweight',
            inpType:'this.props.infor.type',
            inpAge:''
        }
    }
    sexChange = (e)=>{
        this.setState({inpSex:e.target.value})
    }
    weightChange = (e)=>{
        this.setState({inpWeight:e.target.value})
    }
    newChange = (e)=>{
        this.setState({inpNew:e.target.value})
    }
    heightChange = (e)=>{
        this.setState({inpHeight:e.target.value})
    }
    typeChange = (e)=>{
        this.setState({inpType:e.target.value})
    }
    ageChange = (e)=>{
        this.setState({inpAge:e.target.value})
    }
    
    render() {
        return (
            <div className="weight">
               <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/my')}></span>
                    <span>基本信息</span>
                </div>
                <form>
                    性别：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="man" id="man" value="'男'" onChange={this.sexChange}/> 男 &nbsp;&nbsp;
                    <input type="radio" name="man" id="woman" value="'女'" onChange={this.sexChange}/> 女
                    <br/>                   
                    <br/>
                    当前体重：<input 
                                type="number" 
                                className="weight-number"
                                value={this.state.inpWeight} 
                                onChange={this.weightChange}
                            />&nbsp;kg
                    <br/>
                    <br/>
                    目标体重：<input
                                type="number" 
                                className="weight-number"
                                value={this.state.inpNew} 
                                onChange={this.newChange}
                                 />&nbsp;kg
                    <br/>
                    <br/>
                    身高：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input
                            type="number" 
                            className="weight-number"
                            value={this.state.inpHeight} 
                            onChange={this.heightChange}  
                            />&nbsp;m
                    <br/>
                    <br/>
                    年龄：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input
                            type="number" 
                            className="weight-number"
                            value={this.state.inpAge} 
                            onChange={this.ageChange}  
                            />&nbsp;周岁
                    <br/>
                    
                    <br/>
                    <br />
                    目标形式：
                    <input type="radio" name="type" id="add" value="'增重'" onChange={this.typeChange} /> 增重&nbsp;&nbsp;
                    <input type="radio" name="type" id="delete" value="'减重'" onChange={this.typeChange}/> 减重&nbsp;&nbsp;
                    <input type="radio" name="type" id="keep" value="'保持'" onChange={this.typeChange}/> 保持&nbsp;&nbsp;
                    <br/>
                    
                    
                </form>
                <button onClick={()=>{
                    let data = {sex:this.state.inpSex,weight:this.state.inpWeight,goalweight:this.state.inpNew,height:this.state.inpHeight,type:this.state.inpType,age:this.state.inpAge};
                    this.props.history.push('/home');
                    return this.props.dispatch(sub(data));
                }}>提交</button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    infor:state.inforlist.infor
})
export default connect(mapStateToProps)(Weight)
//onClick={this.props.history.push('/home')
//onDoubleClick={this.props.history.push('/home')}
//export default withRouter(Weight);