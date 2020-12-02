import React, { Component } from 'react'

export default class Food extends Component {
    render() {
        return (
            <div>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/my')}></span>
                    <span>我的食物</span>
                </div>
            </div>
        )
    }
}
