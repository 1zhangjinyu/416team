import React, { Component } from 'react'
import {connect} from 'react-redux';
 class Collect extends Component {
    constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'blueTab',
		  }	
	  }	
    render() {
        console.log(this.props.todo)
        return (
            <div>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/my')}></span>
                    <span>我的收藏</span>
                </div>
                <div className="iconfont icon-shoucang3"></div>
                {
                    
                     this.props.todo.map((item,idx)=>
                     <li style={{borderBottom:'1px solid #ccc'}}>
                     <img src={item.img} style={{width:'80px',height:'80px',marginLeft:'30px',marginTop:'20px'}} />
                     <p style={{marginTop:'-60px',paddingLeft:'150px'}}>{item.foodname}</p>
                     {/* <p>{item.content}</p> */}
                     <button onClick={(e)=>{
                          this.props.dispatch({
                             type:'DEL_TODO',
                             index:idx
                         })
                     }} style={{color:'white',width:'70px',height:'40px',marginLeft:'280px',backgroundColor:'rgb(86,186,186)'}}>删除</button></li>
                    )         
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    todo:state.shoucang
})
export default connect(mapStateToProps)(Collect)
