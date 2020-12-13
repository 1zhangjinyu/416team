import React from 'react'
import {NavBar,Icon,TabBar, ActionSheet} from 'antd-mobile';
import {connect} from 'react-redux';
import '../css/nav.css'

class dtdetails extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
            selectedTab: 'redTab',
            i:0,
		  }
		
	  }	
	  
	  componentDidMount(){
		let id=this.props.location.contid
		
        this.props.nice.map((item)=>{
			if(item.id==id){
				this.setState({
					i:item.num,
				})
			}
		})
	}
	
    render(){
		const {img,contid,content,username}=this.props.location;
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
                <img src='https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=332302150,4109713162&fm=111&gp=0.jpg' style={{width:'30px',height:'30px',marginTop:'2px'}} />
                <p style={{fontSize:'15px',marginBottom:'20px',marginTop:'-25px',marginLeft:'40px'}}>用户{username}</p>
					<img  src={this.props.location.img}  style={{width:'100%',height:'375px'}}/>
                    <div style={{height:'40px',borderBottom:'1px solid #ccc'}}></div>
                    <img src={require('../image/pen.png')} style={{width:'50px',height:'50px'}}/>
					<p style={{paddingRight:'250px',paddingTop:'15px',float:'right'}}>{content}</p>
<<<<<<< HEAD
				
=======

>>>>>>> 1ab6561673557430ca0011258747982df8039741
				</div>
					
					 
				<div style={{ position: 'fixed',  width: '100%', bottom: 0 }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            >
                <TabBar.Item
                style={{float:'right'}}
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
                        tre:{img:img,content:content,id:contid,username:username,num:this.state.i}
                    })
                    // this.props.dispatch()
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
	nice:state.dianzan
})
export default connect(mapStateToProps)(dtdetails)
//export default DetailExample