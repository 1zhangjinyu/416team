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
                                    username:item.username,
                                    num:item.num,
                                    times:item.times
                                })
                            }}>
                            <img src={item.img} style={{width:'160px',height:'140px'}}/>
                            <div style={{borderBottom:'1px solid #ccc',height:'20px'}}>
                                 <p style={{fontSize:'10px',lineHeight:'20px'}}>{item.content.length>=3 ? item.content.slice(0,3) : item.content}……</p>
                            </div>
                            <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1554132411,3341554696&fm=11&gp=0.jpg' style={{width:'25px',height:'25px',borderRadius: '25px',marginTop:'4px'}} />
                            <p style={{fontSize:'10px',marginRight:'90px',marginTop:'8px',float:'right'}}>{item.username}</p>
                                    
                             
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