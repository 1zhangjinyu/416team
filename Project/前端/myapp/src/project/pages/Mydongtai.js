import React, { Component } from 'react'
import {connect} from 'react-redux';
import {mydt} from '../actionCreators'
import '../css/nav.css'
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
                            <div className="send">
                                <img src={item.img} style={{ width:'80px',height:'80px',marginLeft:'30px',marginTop:'20px'}} />
                                <p style={{marginTop:'-60px',paddingLeft:'150px'}}>{item.content}</p>
                                <button onClick={(e) => {
                                    this.props.dispatch({
                                        type: 'DEL',
                                        index: idx
                                    })
                                    this.props.dispatch(mydt(item.contid))
                                }} className="del">删除</button>
                            </div>
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