import React, { Component } from 'react'
import './nav.css'
export default class Compare extends Component {
    render() {
        return (
            <div  style={{backgroundColor:'rgb(247,240,240)'}}>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>对比详情</span>
                </div>
                <div style={{width:'400px',height:'150px',backgroundColor:'rgb(247,240,240)'}}>
                <div id="comleft" onClick={()=>this.props.history.push('/home/search1')}>
                    <p style={{fontSize:'30px',paddingLeft:'35px',color:'red'}}>+</p>
                </div>
                <img src={require('./image/vs.png')} style={{width:'50px',height:'50px',marginLeft:'-160px',marginTop:'50px'}}/>
                <div id="conright" onClick={()=>this.props.history.push('/home/search1')}>
                    <p style={{fontSize:'30px',paddingLeft:'35px',color:'red'}}>+</p>
                </div>
                </div>
                <div style={{width:'100%',height:'600px',backgroundColor:'white'}}>
                    <p style={{fontSize:'18px',textAlign:'center',paddingTop:'20px'}}>营养元素</p>
                    <p style={{color:'#ccc'}}>_____________________________________________________________</p>
                </div>
               
               
               
            </div>
        )
    }
}
