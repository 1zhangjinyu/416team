import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './home.css'
const Head= () => {
    return (
        <div>
            <div className='right'>
                <div className='img'>
                    <img style={{width:'100%'}} src={require('./img/img.jpg')}/>
                </div>
                <button className="btn">退出系统</button>
                <ul>
                    <NavLink to='/home'><li className='big'><img style={{paddingRight:'10px'}} src={require('./img/shuju.png')}/>我的首页</li></NavLink>
                    <li className='big'><img style={{paddingRight:'10px'}} src={require('./img/yonghu.png')}/>用户管理</li>
                    <NavLink to='/infor'><li className='small'>基本信息</li></NavLink>
                    
                    <NavLink to='/eat'><li className='small'>饮食记录</li></NavLink>
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

export default Head