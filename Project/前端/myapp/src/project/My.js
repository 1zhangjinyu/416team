import React, { Component } from 'react'
import './nav.css'
import Mytab from './Mytab'
export default class My extends Component {
    render() {
        return (
            <div style={{backgroundColor:'rgb(247,240,240)'}}>
                <div style={{backgroundColor:'rgb(86,186,186)',height:'130px'}}>
                    <img id="user" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=201340457,3408503524&fm=26&gp=0.jpg"/>
                    <p style={{color:'white',fontSize:'15px',float:'right',marginRight:'190px',marginTop:'55px'}}>用户12345678</p>
                    <div className="iconfont icon-xiugai"></div>
                </div>
                <div id="nav">
                    <div id="mytrend">
                       <img src={require('./image/dongtai.png')}/>              
                    </div>
                    <div id="mytrend">
                        <img src={require('./image/shoucang.png')}/> 
                    </div>
                    <div id="mytrend">
                        <img src={require('./image/food.png')}/> 
                    </div>
                </div>
                <div id="report">
                    <p style={{paddingLeft:'10px',paddingTop:'20px',fontSize:'15px'}}>我的健康资料</p>
                    <p style={{color:'#ccc'}}>______________________________________________________</p>
                    <div id="healthyrep">
                        <div className="iconfont icon-baogaogongdan"></div>
                        <p id="word">基本信息</p>
                        <div className="iconfont icon-jiantou"></div>
                        
                    </div>
                    <div id="healthyrep">
                        <div className="iconfont icon-rizhi"></div>
                        <p id="word">健康报告</p>
                        <div className="iconfont icon-jiantou"></div>
                    </div> 
                    <div id="healthyrep">
                        <div className="iconfont icon-shiwubang"></div>
                        <p id="word">饮食方案</p>
                        <div className="iconfont icon-jiantou"></div>
                    </div>
                    <div id="healthyrep">
                        <div className="iconfont icon-wd-copy-copy"></div>
                        <p id="word">私人营养师</p>
                        <div className="iconfont icon-jiantou"></div>
                    </div>
                    <div id="healthyrep">
                        <div className="iconfont icon-dingqixiaojie"></div>
                        <p id="word">上周小结</p>
                        <div className="iconfont icon-jiantou"></div>
                    </div>
                    <div id="healthyrep"></div>
                    <div id="healthyrep"></div>
                    <div id="healthyrep"></div>
                    <div id="healthyrep"></div>
                    <div id="healthyrep"></div>

                </div>
            <Mytab />
            </div>
        )
    }
}
