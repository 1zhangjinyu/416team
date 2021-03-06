import React, { Component } from 'react'
import '../css/nav.css'
import {connect} from 'react-redux';
import Mytab from '../Mytab'
import {myfoods} from '../actionCreators'

class My extends Component {
    componentDidMount(){
        
        this.props.dispatch(myfoods())
    }
    render() {
        return (
            <div style={{backgroundColor:'rgb(247,240,240)'}}>
                <div style={{backgroundColor:'rgb(86,186,186)',height:'130px'}}>
                    <img id="user" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=201340457,3408503524&fm=26&gp=0.jpg"/>
                    <p style={{color:'white',fontSize:'15px',float:'right',marginRight:'50%',paddingTop:'55px'}}>{this.props.infor.username}</p>
                </div>
                <div id="nav">
                    <div id="mytrend" onClick={()=>this.props.history.push('/my/dongtai')}>
                        <div className="iconfont icon-dongtai"></div>
                        <p style={{paddingTop:'10px',fontSize:'5px',textAlign:'center'}}>我的动态</p>
                    </div>
                    <div id="middle" onClick={()=>this.props.history.push('/my/collect')}>
                    <div className="iconfont icon-shoucang2"></div>
                        <p style={{paddingTop:'10px',fontSize:'5px',textAlign:'center'}}>我的收藏</p>                   
                    </div>
                    <div id="lastrend" onClick={()=>this.props.history.push('/my/food')}>
                    <div className="iconfont icon-shiwu"></div>
                        <p style={{paddingTop:'10px',fontSize:'5px',textAlign:'center'}}>我的食物</p>
                    </div>
                </div>
                <div id="report">

                    <div style={{borderBottom:'1px solid #ccc',height:'40px'}}>
                        <p style={{paddingLeft:'10px',fontSize:'15px',lineHeight:'40px'}}>我的健康资料</p>
                    </div>
                    <div id="healthyrep">
                        <div className="iconfont icon-baogaogongdan" onClick={()=>this.props.history.push('/my/infor')}></div>
                        <p id="word">基本信息</p>
                        <div className="iconfont icon-jiantou"></div>
                        
                    </div>
                    <div id="healthyrep" onClick={()=>this.props.history.push('/my/health')}>
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
const mapStateToProps = (state) =>({
    myfoods:state.myfoodslist,
    infor:state.infors
  })
export default connect(mapStateToProps)(My)
