import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './home.css'
import {connect} from 'react-redux'

const Head= (props) => {
    return (
        <div>
            <div className='right'>
                <div className='img'>
                    <img style={{width:'100%'}} src={props.managers.img}/>
                </div>
                <button className="btn">退出系统</button>
                <ul style={{marginLeft:'-40px'}}>
                    <NavLink to='/home'><li className='big'><img style={{paddingRight:'10px'}} src={require('./img/shuju.png')}/>我的首页</li></NavLink>
                    <li className='big'><img style={{paddingRight:'10px'}} src={require('./img/yonghu.png')}/>用户管理</li>
                    <NavLink to='/infor'><li className='small'>基本信息</li></NavLink>
                    
                    <NavLink to='/eat'><li className='small'>饮食记录</li></NavLink>
                    <NavLink to='/content'><li className='small'>文章管理</li></NavLink>
                    <li className='big'><img style={{paddingRight:'10px'}} src={require('./img/shuju.png')}/>数据管理</li>
                    <NavLink to='/foodlist'><li className='small'>食谱管理</li></NavLink>
                    <NavLink to='/food'><li className='small'>食物信息</li></NavLink>
                    <NavLink to='/manager'><li className='big'><img style={{paddingRight:'10px'}} src={require('./img/guanli.png')}/>管理员管理</li></NavLink>
                </ul>
            </div>
            <div className='top'><div className='font'>擅食轻减后台管理系统</div></div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    // managerdetail:state.manager.managerdetail,
    managers:JSON.parse(state.login.managers),
    // upmanager:state.manager.upmanager
}); 

// export default Head
export default  connect(mapStateToProps)(Head);
