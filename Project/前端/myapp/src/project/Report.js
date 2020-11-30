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
				
				<div className="report-max">
					<div className="report-mid">
						<p>你还没有记录</p>
						<p>点击屏幕下方按钮添加</p>
					</div>
					<div className="report-food">

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
			 
			  selected={pathname === '/report/threefood'}
			  onPress={() => {
				
				this.props.history.push('/report/threefood')
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
				  selected={pathname === '/report/threefood'}
				  onPress={() => {
					// this.setState({
					//   selectedTab: 'redTab',
					// });
					this.props.history.push('/report/threefood')
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
export default Report;