import React, { Component } from 'react'
import {connect} from 'react-redux';
import {mydt} from '../actionCreators'

class Mydongtai extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){
        this.props.dispatch(mydt())
    }
    render() {
        // let arr = this.props.mydt
        // console.log(this.props)
        // console.log(this.props.mydt)
        return (
            <div>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/my')}></span>
                    <span>我的动态</span>
                </div>
                <div>
                    {
                        this.props.mydt.map((item,idx) =>
                            <li style={{borderBottom:'1px solid #ccc'}}>
                                <img src={item.img} style={{ width:'80px',height:'80px',marginLeft:'30px',marginTop:'20px'}} />
                                <p style={{marginTop:'-60px',paddingLeft:'150px'}}>{item.content}</p>
                                <button onClick={(e) => {
                                    this.props.dispatch({
                                        type: 'DEL',
                                        index: idx
                                    })
                                    this.props.dispatch(mydt(item.contid))
                                }} style={{ color: 'white', width: '70px', height: '40px', marginLeft: '280px', backgroundColor: 'rgb(86,186,186)' }}>删除</button>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    mydt:state.mydtlist,
    todo:state.shoucang

  })
export default connect(mapStateToProps)(Mydongtai)