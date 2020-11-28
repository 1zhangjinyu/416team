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
                        一 
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>10</div>
                    </div>
                    <div id="weekday">
                        二
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>11</div>
                    </div>
                    <div id="weekday">
                        三
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>12</div>
                    </div>
                    <div id="weekday">
                        四
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>13</div>
                    </div>
                    <div id="weekday">
                        五
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>14</div>
                    </div>
                    <div id="weekday">
                        六
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>15</div>
                    </div>
                    <div id="weekday">
                        日
                        <div style={{marginTop:'10px',width:'20px',height:'20px',backgroundColor:'rgb(188,238,244)',borderRadius:'10px'}}>16</div>
                    </div>
                </div>
            </div>
        )
    }
}
