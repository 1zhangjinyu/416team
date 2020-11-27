import React from 'react'
import {NavBar,Icon,TabBar, ActionSheet} from 'antd-mobile';
import {connect} from 'react-redux';
class DetailExample extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'redTab',
		  }
		
	  }	
	  componentDidMount(){
		let id=this.props.location.id
		console.log(this.props.todo);
		this.props.todo.map((item)=>{
			if(item.id==id){
				this.setState({
					selectedTab:'blueTab',
				})
			}
		})
	}
    render(){
		const {pathname}=this.props.location;
		let img=this.props.location.src
		let id=this.props.location.id
		let title=this.props.location.title
		console.log(this.props);
       return(
            <div>
                 <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => this.props.history.replace(this.props.location.state)}>商品详情</NavBar>
     		

					<img  src={this.props.location.img}   style={{width:'100%',height:'60%'}}/>
					<span>{this.props.location.name}</span>
					 
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
				<i className='iconfont icon-star__easyico'></i>
			  }
			  title="收藏"	
			  key="shoucang"
			  selected={this.state.selectedTab==='blueTab'}
			  onPress={() => {
				  
				this.props.dispatch({
					type:'ADD_TODO',
					col:{img:img,id:id,title:title}
				})

			this.setState({
					  selectedTab:'blueTab',
				  })
			  }}	 
			>
			 
			</TabBar.Item>
            <TabBar.Item
			  icon={
				<i className='iconfont icon-shoucang1'></i>
			  }
			  selectedIcon={
				<i className='iconfont icon-star__easyico'></i>
			  }
			  title="点赞"	
			  key="shoucang"
			  selected={this.state.selectedTab==='blueTab'}
			  onPress={() => {
				  
				this.props.dispatch({
					type:'ADD_TODO',
					col:{img:img,id:id,title:title}
				})

			this.setState({
					  selectedTab:'blueTab',
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
    todo:state.shoucang
})
export default connect(mapStateToProps)(DetailExample)
//export default DetailExample