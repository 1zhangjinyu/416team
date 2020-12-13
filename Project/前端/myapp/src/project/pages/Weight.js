import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../css/style.css';
import {connect} from 'react-redux';
import {sub} from '../actionCreators'

import $ from 'jquery'

class Weight extends Component {
    constructor(props){
        super(props);
        this.state={
            inpSex:this.props.infor.sex,
            inpWeight:this.props.infor.neww,
            inpNew:this.props.infor.goalweight,
            inpType:this.props.infor.type,
            inpAge:this.props.infor.age,
            inpHeight:this.props.infor.height,
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
    gel = (id)=>{
        return document.getElementById(id);
    }
    componentDidMount(){
        if (this.props.infor.sex == "男") {
            $("[name='man']:eq(0)").attr("checked",true)
        } else {
            $("[name='man']:eq(1)").attr("checked",true)
        }
        if (this.props.infor.type == "增重") {
            $("[name='type']:eq(0)").attr("checked",true)
        } else if(this.props.infor.type == "减重"){
            $("[name='type']:eq(1)").attr("checked",true)
        } else{
            $("[name='type']:eq(2)").attr("checked",true)
        }
        
    }
    render() {
        console.log(this.props.infor);
        
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
                            value={Math.floor(this.state.inpHeight*100)} 
                            onChange={this.heightChange}  
                            />&nbsp;cm
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
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    infor:state.infors
})
export default connect(mapStateToProps)(Weight)
//onClick={this.props.history.push('/home')
//onDoubleClick={this.props.history.push('/home')}
//export default withRouter(Weight);