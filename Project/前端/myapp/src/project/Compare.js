import React, { Component } from 'react'
import './nav.css'
export default class Compare extends Component {
    render() {
        return (
            <div  style={{backgroundColor:'rgb(247,240,240)'}}>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/')}></span>
                    <span>对比详情</span>
                </div>
                <div style={{width:'400px',height:'150px',backgroundColor:'rgb(247,240,240)'}}>
                <div id="comleft">
                    <p style={{fontSize:'30px',paddingLeft:'35px',paddingTop:'25px',color:'red'}}>+</p>
                </div>
                <div id="conright">

                </div>
                </div>
               
               
               
            </div>
        )
    }
}
