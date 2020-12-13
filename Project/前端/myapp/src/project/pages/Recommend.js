import React, { Component } from 'react'
import {connect} from 'react-redux';
import {recommendfoods} from '../actionCreators'
import Mytab from '../Mytab'
class Recommend extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount(){
        this.props.dispatch(recommendfoods());
        
      }
    render() {
        return (
            <div style={{backgroundColor:'rgb(247,240,240)',position:'absolute',height:'1900px'}}>
                <div style={{backgroundColor:'rgb(86,186,186)',height:'40px'}}>
                    <p style={{color:'white',fontSize:'17px',textAlign:'center',lineHeight:'40px'}}>逛吃</p>
                    {/* <div className="iconfont icon-refresh" onClick={()=>this.props.dispatch(recommendfoods())}></div> */}
                    <div className="iconfont icon-fadongtai" style={{float:'right',marginTop:'-30px',marginRight:'5px',color:'white'}} onClick={()=>this.props.history.push('/recommend/dongtai')}></div>
                </div>
                <div className="iconfont icon-tuijianfuwu">&nbsp;动态</div>
                    {
                        this.props.refoods.map((item)=><div id="recommend"
                            onClick={()=>{
                                this.props.history.push({
                                    pathname:'/recommend/dtdetails',
                                    img:item.img,
                                    content:item.content,
                                    userid:item.userid,
                                    contid:item.contid,
<<<<<<< HEAD
                                    username:item.username
                                })
                            }}>
                            <img src={item.img} style={{width:'160px',height:'140px'}}/>
                            <div style={{borderBottom:'1px solid #ccc',height:'20px'}}>
                                 <p style={{fontSize:'10px',lineHeight:'20px'}}>{item.content}</p>
                            </div>
                            <img src='https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=332302150,4109713162&fm=111&gp=0.jpg' style={{width:'30px',height:'30px',marginTop:'2px'}} />
                            <p style={{fontSize:'10px',marginRight:'110px',marginTop:'8px',float:'right'}}>{item.username}</p>
=======
                                    username:item.username,
                                    num:item.num
                                })
                            }}>
                            <img src={item.img} style={{width:'160px',height:'140px'}}/>
                            <img src='https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=332302150,4109713162&fm=111&gp=0.jpg' style={{width:'55px',height:'55px'}} />
                            <p style={{fontSize:'15px',marginRight:'75px',marginTop:'15px',float:'right'}}>{item.username}</p>
                            <p style={{fontSize:'10px',marginRight:'45px',marginTop:'-20px',float:'right'}}>{item.content.length>=3 ? item.content.slice(0,3) : item.content}……</p>
>>>>>>> e3f5c5081d8430f7a3264764f83e2dd2cafef218
                        </div>)
                    }
                <Mytab />       
                </div>
        )
    }
}
const mapStateToProps = (state) =>({
    refoods:state.recommendlist.recommendfoods
  })
export default connect(mapStateToProps)(Recommend)