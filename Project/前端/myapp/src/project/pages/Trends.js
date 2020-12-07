import React, { Component } from 'react'
import {connect} from 'react-redux';
class Trends extends Component {
    constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'greenTab',
		  }	
	  }	
    render() {
        return (
            <div>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/my')}></span>
                    <span>我的动态</span>
                </div>
                {/* <p>赞过</p> */}
                <div className="iconfont icon-dianzan1" style={{marginLeft:'20px',marginTop:'25px'}}>赞过</div>
                {
                      this.props.nice.map((item,idx)=>
                      <li key={item} style={{listStyleType:'none'}}>
                      <img src={item.img} style={{width:'100px',height:'100px'}} />
                      <span style={{marginTop:'30px'}}>{item.foodname}</span>
                      <button onClick={(e)=>{
                           this.props.dispatch({
                              type:'DEL_TODO',
                              index:idx
                          })
                      }}>删除</button></li>
                     )        
                }
            </div>
           
        )
    }
}
const mapStateToProps = (state) =>({
    nice:state.dianzan
})
export default connect(mapStateToProps)(Trends)
