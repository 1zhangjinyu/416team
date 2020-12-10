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
            <div style={{backgroundColor:'rgb(247,240,240)',position:'absolute',height:'900px'}}>
                <div style={{backgroundColor:'rgb(86,186,186)',height:'40px'}}>
                    <p style={{color:'white',fontSize:'17px',textAlign:'center',lineHeight:'40px'}}>逛吃</p>
                    {/* <div className="iconfont icon-refresh" onClick={()=>this.props.dispatch(recommendfoods())}></div> */}
                    <div className="iconfont icon-fadongtai" style={{float:'right',marginTop:'-30px',marginRight:'5px'}} onClick={()=>this.props.history.push('/recommend/dongtai')}></div>
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
                                    contid:item.contid
                                })
                            }}>
                            <img src={item.img} style={{width:'160px',height:'140px'}}/>
                            <p style={{fontSize:'10px'}}>{item.content}</p>
                            {/* <p style={{fontSize:'10px'}}>{item.content}</p> */}
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