import React, { Component } from 'react'
import {Button,TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {heat} from '../actionCreators';
import '../css/style.css';
class Breakfastfood extends Component {
    constructor(props){
        super(props);
    }
    render() {
		console.log(this.props);
        return (
            <div>{
                this.props.props.breakfastfoods.map((item)=><li className="report-food-li">
                    <img className="report-food-picture" src={item.img} ></img>
					<p className="report-food-p">{item.fname}</p>
					<p className="report-food-p2">{item.heat}千卡</p>
					<p className="report-food-p3">早餐</p>
                </li>   
                )
            }
            </div>
        )
    }
}
class Lunchfood extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div>{
                this.props.props.lunchfoods.map((item)=><li className="report-food-li">
                    <img className="report-food-picture" src={item.img} ></img>
					<p className="report-food-p">{item.fname}</p>
					<p className="report-food-p2">{item.heat}千卡</p>
					<p className="report-food-p3">午餐</p>
                </li>   
                )
            }
            </div>
        )
    }
}
class Dinnerfood extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.props.dinnerfoods)
        return (
            <div>{
                this.props.props.dinnerfoods.map((item)=><li className="report-food-li">
                    <img className="report-food-picture" src={item.img} ></img>
					<p className="report-food-p">{item.fname}</p>
					<p className="report-food-p2">{item.heat}千卡</p>
					<p className="report-food-p3">晚餐</p>
                </li>   
                )
            }
            </div>
        )
    }
}
class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
        };
	  }
	  componentDidMount(){
		  this.props.dispatch(heat());
	  }
    render() {
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
		console.log(this.props.restcal)
        const {pathname}=this.props.location;
        return (
            <div className="report">
                <div className="report-header">
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>健康记录</span>
                </div>
                <div className="report-nav">
                    <span>建议摄入总共{Math.floor(this.props.restcal)}kcal</span>
                    <div className="report-range">
						<div style={{height:'30px',backgroundColor:'rgb(87,189,203)',width:`${(this.props.restcal-kcal)/this.props.restcal*100}%`}}></div>
					</div>
                    <div style={{position:'absolute'}}>
                        <p style={{marginRight:'120px'}}>
							剩余(kcal) {Math.floor(this.props.restcal-kcal)}</p>
                        <p>摄入(kcal) {kcal}</p>
                    </div>    
                </div>
				
				<div className="report-max">
					<div className="report-mid">
						<p>你还没有记录</p>
						<p>点击屏幕下方按钮添加</p>
					</div>
					<div className="report-food">
						<Breakfastfood props={this.props}/>
						<Lunchfood props={this.props}/>
						<Dinnerfood props={this.props} />
					</div>
				</div>
                
                <div style={{ position: 'fixed',  width: '100%', bottom: 0 }}>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="#ff5000"
			barTintColor="white"
		  >
			<TabBar.Item
			  title="早餐"
			  key="breakfast"
			  icon={
				  <i className='iconfont icon-zaocan'></i>
			  }
			selectedIcon={
				<i className='iconfont icon-zaocan1'></i>
			}
			 
			  selected={pathname === '/report/onefood'}
			  onPress={() => {
				
				this.props.history.push('/report/onefood')
			  }}
			  data-seed="logId"
			>
			 
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<i className='iconfont icon-shiwu-1'></i>
			  }
			  selectedIcon={
				<i className='iconfont icon-shiwu-1'></i>
			  }
			  title="午餐"
			  key="Login"
				  selected={pathname === '/report/twofood'}
				  onPress={() => {
					// this.setState({
					//   selectedTab: 'redTab',
					// });
					this.props.history.push('/report/twofood')
				  }}
				  data-seed="logId1"
			
			>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				  <i className='iconfont icon-shiwu-'></i>
				}
			  selectedIcon={
				<i className='iconfont icon-shiwu-'></i>
				}
			  title="晚餐"
			  key="my"
			  selected={pathname === '/report/threefood'}
			  onPress={() => {
				this.props.history.push('/report/threefood');
			  }}
			>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				  <i className='iconfont icon-xiaojie'></i>
				}
			  selectedIcon={
				<i className='iconfont icon-xiaojie'></i>
				}
			  title="体重"
			  key="my"
			  selected={pathname === '/report/addweight'}
			  onPress={() => {
				this.props.history.push('/report/addweight');
			  }}
			>
			</TabBar.Item>
		  </TabBar>
		</div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
	breakfastfoods:state.breakfastfoods,
	lunchfoods:state.lunchfoods,
	dinnerfoods:state.dinnerfoods,
	restcal:state.rest.restcal
})
export default connect(mapStateToProps)(Report)
