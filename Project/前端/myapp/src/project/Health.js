import React, { Component } from 'react'
import './nav.css';
import {connect} from 'react-redux';
import {health} from './actionCreators';



class Health extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const {health} = this.props;
        let arr1 = health.sevenweight;
        let arr2 = health.sevendate;
        let one = arr2[1].slice(6,8);
        console.log(arr2[1].slice(6,8))
        console.log(arr1)
        return (
            <div>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>健康报告</span>
                </div>
                <div id="score">{this.props.health.score}
                </div>
                <div id="weight">
                    <p style={{textAlign:'center',paddingTop:'10px'}}>体重</p>
                    <p style={{paddingLeft:'20px',color:'rgb(118,145,211)',fontWeight:'bolder'}}>___________________________________________________</p>
                    <p style={{paddingLeft:'30px',paddingTop:'30px'}}>最新体重</p>
                    <div style={{width:'50px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px',float:'left',marginLeft:'90px',marginTop:'-20px'}}>{arr1[0]}kg</div>
                    {/* <input type="range" min max s/> */}
                    <p style={{paddingLeft:'30px',paddingTop:'30px'}}>最新BMI</p>
                    <div style={{width:'50px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px',float:'left',marginLeft:'90px',marginTop:'-20px'}}>{Math.floor(health.BMI)}</div>
                </div>
                <div id="diary">
                    <p style={{paddingLeft:'30px',paddingTop:'10px'}}>体重日志</p>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[6]?arr2[6].slice(6,8):''}</div>
                        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[6]}`?`${arr1[6]*2}px`:'0px'}}>{arr1[6]?arr1[6]:''}</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[5]?arr2[5].slice(6,8):''}</div>
        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[5]}`?`${arr1[5]*1.5}px`:'0px'}}>{arr1[5]?arr1[5]:''}</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[4]?arr2[4].slice(6,8):''}</div>
                        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[4]}`?`${arr1[4]*2}px`:'0px'}}>{arr1[4]?arr1[4]:''}</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[3]?arr2[3].slice(6,8):''}</div>
                        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[3]}`?`${arr1[3]*2}px`:'0px'}}>{arr1[3]?arr1[3]:''}</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[2]?arr2[2].slice(6,8):''}</div>
                        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[2]}`?`${arr1[2]*2}px`:'0px'}}>{arr1[2]?arr1[2]:''}</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[1]?arr2[1].slice(6,8):''}</div>
                        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[1]}`?`${arr1[1]*2}px`:'0px'}}>{arr1[1]?arr1[1]:''}</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'30px',height:'30px',backgroundColor:'rgb(188,238,244)',borderRadius:'15px',textAlign:'center',lineHeight:'30px'}}> {arr2[0]?arr2[0].slice(6,8):''}</div>
                        <div style={{width:'25px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[0]}`?`${arr1[0]*2}px`:'0px'}}>{arr1[0]?arr1[0]:''}</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    health:state.healthlist.health
})
export default connect(mapStateToProps)(Health)
