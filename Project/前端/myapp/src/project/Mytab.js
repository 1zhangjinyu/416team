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
		if(pathname.split('/').length>2){
            return null
        }
	  return (
		<div style={{ position: 'fixed',  width: '100%', bottom: 0 }}>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="#ff5000"
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
			 
			  selected={pathname === '/'}
			  onPress={() => {
				
				this.props.history.push('/')
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
			  title="每日推荐"
			  key="Login"
				  selected={pathname === '/shoucang'}
				  onPress={() => {
					// this.setState({
					//   selectedTab: 'redTab',
					// });
					this.props.history.push('/shoucang')
				  }}
				  data-seed="logId1"
			
			>
			 每日推荐
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