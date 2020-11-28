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
            </div>
        )
    }
}
