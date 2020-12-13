import React, { Component } from 'react'
import '../css/nav.css';
import {connect} from 'react-redux';
import {health} from '../actionCreators';



class Health extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const {health} = this.props;
        console.log(this.props)
        let arr1 = health.sevenweight;
        let arr2 = health.sevendate;
        let url = this.props.location.pathname.split('/')[1];
		//console.log(url);
		let url1 = '/'+url
        console.log(arr1)
        return (
            <div>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push(url1)}></span>
                    <span>健康报告</span>
                </div>
                <div id="score">{this.props.health.score}
                </div>
                <div id="weight">
                    <div style={{height:'20px',textAlign:'center',paddingTop:'10px',borderBottom:'1px solid #ccc'}}>
                        <p style={{lineHeight:'20px'}}>体重</p>
                    </div>
                    <p style={{paddingLeft:'30px',paddingTop:'30px'}}>最新体重</p>
                    <div className="neweight">{arr1[0]}kg</div>
                    <p style={{paddingLeft:'30px',paddingTop:'50px'}}>最新BMI</p>
                    <div className="neweight">{Math.floor(health.BMI)}</div>
                </div>
                <div id="diary">
                    <p style={{paddingLeft:'30px',paddingTop:'10px'}}>体重日志</p>
                    <div id="weekday">
                        <div className="date"> {arr2[6]?arr2[6].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[6]}`?`${arr1[6]*2}px`:'0px'}}>{arr1[6]?arr1[6]:''}</div>
                    </div>
                    <div id="weekday">
                        <div className="date"> {arr2[5]?arr2[5].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[5]}`?`${arr1[5]*1.5}px`:'0px'}}>{arr1[5]?arr1[5]:''}</div>
                    </div>
                    <div id="weekday">
                        <div className="date"> {arr2[4]?arr2[4].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[4]}`?`${arr1[4]*2}px`:'0px'}}>{arr1[4]?arr1[4]:''}</div>
                    </div>
                    <div id="weekday">
                        <div className="date"> {arr2[3]?arr2[3].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[3]}`?`${arr1[3]*2}px`:'0px'}}>{arr1[3]?arr1[3]:''}</div>
                    </div>
                    <div id="weekday">
                        <div className="date"> {arr2[2]?arr2[2].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[2]}`?`${arr1[2]*2}px`:'0px'}}>{arr1[2]?arr1[2]:''}</div>
                    </div>
                    <div id="weekday">
                        <div className="date"> {arr2[1]?arr2[1].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[1]}`?`${arr1[1]*2}px`:'0px'}}>{arr1[1]?arr1[1]:''}</div>
                    </div>
                    <div id="weekday">
                        <div className="date"> {arr2[0]?arr2[0].slice(6,8):''}</div>
                        <div style={{width:'35px',marginLeft:'-8px',marginTop:'30px',textAlign:'center',backgroundColor:'rgb(86,189,203)',height:`${arr1[0]}`?`${arr1[0]*2}px`:'0px'}}>{arr1[0]?arr1[0]:''}</div>
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
