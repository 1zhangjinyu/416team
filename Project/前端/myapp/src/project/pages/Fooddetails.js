import React from 'react'
import {NavBar,Icon,TabBar, ActionSheet,Button} from 'antd-mobile';
import {connect} from 'react-redux';
import '../css/nav.css'

class DetailExample extends React.Component{
	constructor(props) {
		super(props);
		let no = this.props.location.no;
		this.state = {
			selectedTab: 'redTab',
			i:no,
		  }
		
	  }	
	componentDidMount(){
		let id=this.props.location.id;
		this.props.todo.map((item)=>{
			if(item.id==id){
				this.setState({
					selectedTab:'blueTab',
				})
			}
		})
		console.log(this.props.nice);
		this.props.nice.map((item)=>{
			if(item.id==id){
				this.setState({
					i:item.num,
				})
			}
		})
	}
	
    render(){
		console.log(this.state.i)
		const {img,id,content,foodname}=this.props.location;
		let url = this.props.location.pathname.split('/')[1];
		//console.log(url);
		let url1 = '/'+url
		console.log(this.props)
       return(
            <div>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push(url1)}></span>
                    <span>详情</span>
                </div>
				<div style={{width:'100%'}}>
					<img  src={this.props.location.img}  style={{width:'100%',height:'375px'}}/>
					<span>{foodname}</span>
					<span>{this.props.location.content}</span>
				</div>
					
					 
				<div style={{ position: 'fixed',  width: '100%', bottom: 0 }}>
				<TabBar
					unselectedTintColor="#949494"
					tintColor="#33A3F4"
					barTintColor="white"
		  		>
			
				<TabBar.Item
					icon={
						<i className='iconfont icon-shoucang1'></i>
					}
					selectedIcon={
						<i className='iconfont icon-shoucang'></i>
					}
					title="收藏"	
					key="shoucang"
					selected={this.state.selectedTab==='blueTab'}
					onPress={() => {
						
						this.props.dispatch({
							type:'ADD',
							col:{img:img,foodname:foodname,content:content,id:id}
						})

					this.setState({
							selectedTab:'blueTab',
						})
					}}	 
				>
				</TabBar.Item>
				<TabBar.Item
					icon={
						<i className='iconfont icon-dianzan1'></i>
					}
					selectedIcon={
						<i className='iconfont icon-dianzan1'></i>
					}
					title={this.state.i}	
					key="item"
					selected={this.state.selectedTab==='greenTab'}
					onPress={() => {  
						this.setState({
							i:++this.state.i
						})
						this.props.dispatch({
							type:'ADD_TODO',
							tre:{img:img,foodname:foodname,id:id,num:this.state.i}
						})
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
	todo:state.shoucang,
	nice:state.dianzan,
	foods:state.foodslist.foods,
})
export default connect(mapStateToProps)(DetailExample)
//export default DetailExample