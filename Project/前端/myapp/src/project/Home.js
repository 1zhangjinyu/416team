import React, { Component } from 'react'
import Cookbook, { Breakfast, Lunch,Dinner } from './Cookbook';
import './nav.css';
export default class Home extends Component {
    render() {
       
        return (
            <div style={{backgroundColor:'rgb(247,240,240)'}}>
                <div style={{backgroundColor:'rgb(86,186,186)'}}>
                   <p style={{fontSize:'30px',color:'white',textAlign:'center'}}>擅 食 轻 减</p>
        <button className="search" onClick={()=>this.props.history.push('/home/search')} > 请输入食物名称  </button>
            <div id="left" className="iconfont icon-duibifenxi" >
                <p id="compare" onClick={()=>this.props.history.push('/home/com')}>食物对比</p>
            </div>
            <div id="right" className="iconfont icon-paixingbang" >
                <p id="bang" onClick={()=>this.props.history.push('/home/rank')}>食物排行榜</p>
            </div>
                </div>
                <div id="healthy">
                    <span id="rec">健康记录</span>
                    <span id="rep">健康报告></span>
                    <p style={{fontSize:'5px',color:'grey',paddingTop:'25px',paddingLeft:'20px'}}>还可以吃</p>
                    <p style={{paddingLeft:'20px',paddingTop:'10px'}}>__________________________________________</p>
                    <p style={{fontSize:'5px',color:'grey',paddingTop:'25px',paddingLeft:'20px'}}>体重</p>
                    <p style={{paddingLeft:'20px',paddingTop:'10px'}}>__________________________________________</p>
                    <p style={{paddingLeft:'115px',paddingTop:'15px',fontSize:'17px'}}>查看更多 ></p>
                </div>
                <p style={{fontSize:'18px',paddingTop:'20px',paddingLeft:'10px'}}>我的食谱</p>
                <span className="iconfont icon-shuaxin" style={{paddingLeft:'300px'}}>换一批</span>
                <div id="eat">
                    <p style={{fontSize:'15px'}}>早餐</p>
                    <Breakfast/>
                    <p style={{fontSize:'15px',paddingTop:'30px'}}>午餐</p>
                    <Lunch/>
                    <p style={{fontSize:'15px',paddingTop:'30px'}}>晚餐</p>
                    <Dinner/>
                </div>
            </div>
        )
    }
}
