import React, { Component } from 'react'
import './nav.css'
export default class Health extends Component {
    render() {
        return (
            <div>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>健康报告</span>
                </div>
                <div id="score">
                </div>
                <div id="weight">
                    <p style={{textAlign:'center',paddingTop:'10px'}}>体重</p>
                    <p style={{paddingLeft:'20px',color:'rgb(118,145,211)',fontWeight:'bolder'}}>___________________________________________________</p>
                    <p style={{paddingLeft:'30px',paddingTop:'30px'}}>最新体重</p>
                    {/* <input type="range" min max s/> */}
                    <p style={{paddingLeft:'30px',paddingTop:'30px'}}>最新BMI</p>
                </div>
                <div id="diary">
                    <p style={{paddingLeft:'30px',paddingTop:'10px'}}>体重日志</p>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>一</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>二</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>三</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>四</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>五</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>六</div>
                    </div>
                    <div id="weekday">
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>七</div>
                    </div>
                </div>
            </div>
        )
    }
}
