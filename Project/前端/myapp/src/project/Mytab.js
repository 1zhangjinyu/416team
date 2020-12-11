import React from 'react';
import {Button,TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class Mytab extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		selectedTab: 'blueTab',
	  };
	}
	render() {
		const {pathname}=this.props.location;
		// if(pathname.split('/').length>2){
        //     return null
        // }
	  return (
		<div style={{ position: 'fixed',  width: '100%', bottom: 0 }}>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="rgb(86,186,186)"
			barTintColor="white"
		  >
			<TabBar.Item
			  title="首页"
			  key="home"
			  icon={
				  <i className='iconfont icon-shouye1'></i>
			  }
			selectedIcon={
				<i className='iconfont icon-shouye'></i>
			}
			 
			  selected={pathname === '/home'}
			  onPress={() => {
				
				this.props.history.push('/home')
			  }}
			  data-seed="logId"
			>
			 
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<i className='iconfont icon-biaoqing'></i>
			  }
			  selectedIcon={
				<i className='iconfont icon-biaoqing1'></i>
			  }
			  title="圈子"
			  key="Login"
				  selected={pathname === '/recommend'}
				  onPress={() => {
					// this.setState({
					//   selectedTab: 'redTab',
					// });
					this.props.history.push('/recommend')
				  }}
				  data-seed="logId1"
			
			>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				  <i className='iconfont icon-wode2'></i>
				}
			  selectedIcon={
				<i className='iconfont icon-tianchongxing-'></i>
				}
			  title="我的"
			  key="my"
			  selected={pathname === '/my'}
			  onPress={() => {
				// this.setState({
				//   selectedTab: 'yellowTab',
				// });
				this.props.history.push('/my');
			  }}
			>
			</TabBar.Item>
		  </TabBar>
		</div>
	  );
	}
  }
  export default withRouter(Mytab);