import React, { Component } from 'react'
import {connect} from 'react-redux';
import {recommendfoods} from '../actionCreators'
import Mytab from '../Mytab'
class Recommend extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount(){
        if(this.props.refoods[0]=={}){
            this.props.dispatch(recommendfoods());
        }
      }
    render() {
        // let arr=[
        //     {name:'早餐汤',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525522399,910083894&fm=15&gp=0.jpg',del:'高温烹煮，慢熬'},
        //     {name:'早餐汤',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525522399,910083894&fm=15&gp=0.jpg',del:'高温烹煮，慢熬'},
        //     {name:'早餐汤',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525522399,910083894&fm=15&gp=0.jpg',del:'高温烹煮，慢熬'},
        //     {name:'早餐汤',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525522399,910083894&fm=15&gp=0.jpg',del:'高温烹煮，慢熬'},
        //     {name:'早餐汤',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525522399,910083894&fm=15&gp=0.jpg',del:'高温烹煮，慢熬'},
        //     {name:'早餐汤',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525522399,910083894&fm=15&gp=0.jpg',del:'高温烹煮，慢熬'},

        // ]
        return (
            <div style={{backgroundColor:'rgb(247,240,240)',position:'absolute',height:'900px'}}>
                <div style={{backgroundColor:'rgb(86,186,186)',height:'40px'}}>
                    <p style={{color:'white',fontSize:'17px',textAlign:'center',lineHeight:'40px'}}>逛吃</p>
                    <div className="iconfont icon-refresh" onClick={()=>this.props.dispatch(recommendfoods())}></div>
                </div>
                <div className="iconfont icon-tuijianfuwu">&nbsp;推荐</div>
                    {
                        this.props.refoods.map((item)=><div id="recommend"
                            onClick={()=>{
                                this.props.history.push({
                                    pathname:'/recommend/fooddetails',
                                    img:item.img,
                                    content:item.content,
                                    foodname:item.foodname,
                                    id:item.id
                                })
                            }}>
                            <img src={item.img} style={{width:'160px',height:'140px'}}/>
                            <p style={{fontSize:'10px'}}>{item.foodname}</p>
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