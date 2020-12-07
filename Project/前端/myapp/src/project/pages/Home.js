import React, { Component } from 'react'
import '../css/nav.css';
import {connect} from 'react-redux';
import {foods} from '../actionCreators';
import {heat} from '../actionCreators';
import {health} from '../actionCreators'
import Mytab from '../Mytab'

class Breakfast extends Component {
    constructor(props){
        super(props);
    }
    render() {
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
class Dinner extends Component {
    constructor(props){
        super(props);
    }
    render() {
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

class Home extends Component {
    constructor(props) {
        super(props);
      }
    
    componentWillMount(){
        this.props.dispatch(heat());
        this.props.dispatch(health());
        if(this.props.foods===[]){
            this.props.dispatch(foods());
        }  
    }
    componentDidUpdate(preProps,preState){
        console.log(preProps.foods)
        if(this.props.foods===[]){
            this.props.dispatch(foods());
        }  
    }
    render() {
        console.log(this.props.health.sevenweight);
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
        });
        let kcal = 0;
		this.props.breakfastfoods.map((item)=>{
			kcal += item.heat;
		})
		this.props.lunchfoods.map((item)=>{
			kcal += item.heat;
		})
		this.props.dinnerfoods.map((item)=>{
			kcal += item.heat;
		})
		console.log(kcal)

        return (
            <div style={{backgroundColor:'rgb(247,240,240)'}}>
                <div style={{backgroundColor:'rgb(86,186,186)'}}>
                   <p style={{fontSize:'30px',color:'white',textAlign:'center'}}>擅 食 轻 减</p>
        <button className="home-search" onClick={()=>this.props.history.push('/home/search')} > 请输入食物名称  </button>
            <div id="home-left" className="iconfont icon-duibifenxi" >
                <p id="compare" onClick={()=>this.props.history.push('/home/com')}>食物对比</p>
            </div>
            <div id="home-right" className="iconfont icon-paixingbang" >
                <p id="bang" onClick={()=>this.props.history.push('/home/rank')}>食物排行榜</p>
            </div>
                </div>
                <div id="healthy">
                    <span id="rec">健康记录</span>
                    <span id="rep" onClick={()=>this.props.history.push('/home/health')}>健康报告> </span>
        <p style={{fontSize:'5px',color:'grey',paddingTop:'20px',paddingLeft:'20px'}}>还可以吃 {Math.floor(this.props.restcal-kcal)}kcal</p>
                    <p style={{paddingLeft:'20px'}}>__________________________________________</p>
                    <p style={{fontSize:'5px',color:'grey',paddingTop:'20px',paddingLeft:'20px'}}>体重 {this.props.health.sevenweight?this.props.health.sevenweight[0]:''}kg</p>
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
    foods:state.foodslist.foods,
    breakfastfoods:state.breakfastfoods,
	lunchfoods:state.lunchfoods,
	dinnerfoods:state.dinnerfoods,
    restcal:state.rest.restcal,
    health:state.healthlist.health
  })
export default connect(mapStateToProps)(Home)