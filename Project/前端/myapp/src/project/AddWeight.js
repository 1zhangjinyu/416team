import React, { Component } from 'react'

export default class AddWeight extends Component {
    render() {
        return (
            <div>
               <div className="report-header">
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>记录体重</span>
                </div>
            </div>
        )
    }
}
