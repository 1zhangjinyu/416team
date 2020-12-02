import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './style.css';

class Weight extends Component {
    constructor(props){
        super(props);
        this.state={
            inpSex:'',
            inpWeight:'',
            inpNew:'',
            inpType:'',
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
    
    sub=()=>{
        let data = {sex:this.state.inpSex,weight:this.state.inpWeight,goalweight:this.state.inpNew,height:this.state.inpHeight,type:this.state.inpType};
        fetch('https://www.hmyyz.top:8089/weight', {
            method: 'POST', 
            mode:'cors',
            body: JSON.stringify(data), 
                
        })
        .then(function(res){return res.text()})
        .catch(error => console.error('Error:', error))
        .then(function(res){
            console.log(res);
        });
    }
    render() {
        return (
            <div className="weight">
                <div className="weight-header">个人信息</div>
                <form>
                    性别：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="man" id="man" value="'男'" onChange={this.sexChange}/> 男 &nbsp;&nbsp;
                    <input type="radio" name="man" id="woman" value="'女'" onChange={this.sexChange}/> 女
                    <br/>
                    ——————————————————————
                    <br/>
                    当前体重：<input 
                                type="number" 
                                className="weight-number"
                                value={this.state.inpWeight} 
                                onChange={this.weightChange}
                            />kg
                    <br/>
                    ——————————————————————
                    <br/>
                    目标体重：<input
                                type="number" 
                                className="weight-number"
                                value={this.state.inpNew} 
                                onChange={this.newChange}
                                 />kg
                    <br/>
                    ——————————————————————
                    <br/>
                    身高：<input
                            type="number" 
                            className="weight-number"
                            value={this.state.inpHeight} 
                            onChange={this.heightChange}  
                            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cm
                    <br/>
                    ——————————————————————
                    <br/>
                    年龄：<input
                            type="number" 
                            className="weight-number"
                            value={this.state.inpAge} 
                            onChange={this.ageChange}  
                            />&nbsp;&nbsp;&nbsp;&nbsp;周岁
                    <br/>
                    ——————————————————————
                    <br/>
                    <br />
                    目标形式：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="type" id="add" value="'增重'" onChange={this.typeChange} /> 增重&nbsp;&nbsp;
                    <input type="radio" name="type" id="delete" value="'减重'" onChange={this.typeChange}/> 减重&nbsp;&nbsp;
                    <input type="radio" name="type" id="keep" value="'保持'" onChange={this.typeChange}/> 保持&nbsp;&nbsp;
                    <br/>
                    ——————————————————————
                    
                </form>
                <button onClick={()=>{
                    this.props.history.push('/home');
                    return this.sub();
                }}>提交</button>
            </div>
        )
    }
}
//onClick={this.props.history.push('/home')
//onDoubleClick={this.props.history.push('/home')}
export default withRouter(Weight);