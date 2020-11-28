import React, { Component } from 'react'
//import  {Breakfast,Lunch,Dinner} from './Cookbook';
//import Breakfast from './Cookbook';
import './nav.css';
import {connect} from 'react-redux';
import {foods} from './actionCreators'
import Mytab from './Mytab'

class Breakfast extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //console.log(this.props)
        return (
            <div id="morning">{
                this.props.data.map((item)=><li onClick={()=>{
                   this.props.props.history.push({
                      pathname:'/home/fooddetails',
                      img:item.img,
                      content:item.content,
                      foodname:item.foodname,
                      id:item.id
                    })
                }}>
                    <img id="picture" src={item.img} ></img>
                </li>   
                )
            }
            </div>
        )
    }
}
class Lunch extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //console.log(this.props)
        return (
            <div id="dinner">{
                this.props.data.map((item)=><li onClick={()=>{
                   this.props.props.history.push({
                      pathname:'/home/fooddetails',
                      img:item.img,
                      content:item.content,
                      foodname:item.foodname,
                      id:item.id
                    })
                }}>
                    <img id="picture" src={item.img} ></img>
                </li>   
                )
            }
            </div>
        )
    }
}
class Dinner extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //console.log(this.props)
        return (
            <div id="dinner">{
                this.props.data.map((item)=><li onClick={()=>{
                   this.props.props.history.push({
                      pathname:'/home/fooddetails',
                      img:item.img,
                      content:item.content,
                      foodname:item.foodname,
                      id:item.id
                    })
                }}>
                    <img id="picture" src={item.img} ></img>
                </li>   
                )
            }
            </div>
        )
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount(){
          this.props.dispatch(foods())
      }
    render() {
        // this.props.dispatch(foods())
        console.log(this.props.foods);
        let arr1=[],arr2=[],arr3=[];
        this.props.foods.map((item)=>{
            if(item.eattime==='早'){
                arr1.push(item);
            }
            else if(item.eattime==='中'){
                arr2.push(item);
            }
            else if(item.eattime==='晚'){
                arr3.push(item);
            }
        })
        // let arr1=['https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00679-3288.jpg',
        // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1895037277,3199019854&fm=26&gp=0.jpg',
        // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2517943680,1479891239&fm=26&gp=0.jpg',];
        // let arr2=[
        //     'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258033031,1196083719&fm=26&gp=0.jpg',
        //     'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005779767,1621209550&fm=26&gp=0.jpg',
        //     'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2304171237,4096663632&fm=26&gp=0.jpg',];
        // let arr3=[
        //     'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2741553010,2122120810&fm=26&gp=0.jpg',
        //     'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1689433545,3167262103&fm=26&gp=0.jpg',
        //     'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2132254289,481893094&fm=26&gp=0.jpg'
        // ];

        return (
            <div style={{backgroundColor:'rgb(247,240,240)'}}>
                <div style={{backgroundColor:'rgb(86,186,186)'}}>
                   <p style={{fontSize:'30px',color:'white',textAlign:'center'}}>擅 食 轻 减</p>
        <button className="search" onClick={()=>this.props.history.push('/home/search')} > 请输入食物名称  </button>
            <div id="left" className="iconfont icon-duibifenxi" >
                <p id="compare" onClick={()=>this.props.history.push('/home/com')}>食物对比</p>
            </div>
            <div id="right" className="iconfont icon-paixingbang" >
                <p id="bang" onClick={()=>this.props.history.push('/home/rank')}>食物排行榜</p>
            </div>
                </div>
                <div id="healthy">
                    <span id="rec">健康记录</span>
                    <span id="rep">健康报告> </span>
                    <p style={{fontSize:'5px',color:'grey',paddingTop:'20px',paddingLeft:'20px'}}>还可以吃</p>
                    <p style={{paddingLeft:'20px'}}>__________________________________________</p>
                    <p style={{fontSize:'5px',color:'grey',paddingTop:'20px',paddingLeft:'20px'}}>体重</p>
                    <p style={{paddingLeft:'20px'}}>__________________________________________</p>
                    <p style={{paddingLeft:'115px',paddingTop:'15px',fontSize:'17px'}} onClick={()=>this.props.history.push('/report')}>查看更多 ></p>
                </div>
                <p style={{fontSize:'18px',paddingTop:'20px',paddingLeft:'10px'}}>我的食谱</p>
                <span className="iconfont icon-shuaxin" style={{paddingLeft:'300px'}} onClick={()=>this.props.dispatch(foods())}>换一批</span>
                <div id="eat">
                    <p style={{fontSize:'15px'}}>早餐</p>
                    <Breakfast data={arr1} props={this.props}/>
                    <p style={{fontSize:'15px',paddingTop:'30px'}}>午餐</p>
                    <Lunch data={arr2} props={this.props}/>
                    <p style={{fontSize:'15px',paddingTop:'30px'}}>晚餐</p>
                    <Dinner data={arr3} props={this.props}/>
                </div>
                <Mytab />
            </div>
           
        )
    }
}
const mapStateToProps = (state) =>({
    foods:state.foodslist.foods
  })
export default connect(mapStateToProps)(Home)