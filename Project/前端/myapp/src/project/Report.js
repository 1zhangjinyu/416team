import React, { Component } from 'react'
import {Button,TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
        };
      }
    render() {
        const {pathname}=this.props.location;
        return (
            <div className="report">
                <div className="report-header">
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>健康记录</span>
                </div>
                <div className="report-nav">
                    <span>建议总共摄入kcal</span>
                    <div className="report-range"></div>
                    <div style={{position:'absolute'}}>
                        <p style={{marginRight:'140px'}}>摄入(kcal) 132</p>
                        <p>体重(kg) 45</p>
                    </div>    
                </div>
                <div className="report-mid">
                    <p>你还没有记录</p>
                    <p>点击屏幕下方按钮添加</p>
                </div>
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
			  title="每日推荐"
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
            </div>
        )
    }
}
export default withRouter(Report);