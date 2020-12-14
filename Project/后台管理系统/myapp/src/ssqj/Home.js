import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Head from './head'
import './home.css'
const home = () => {
    return (
        <div>
            <Head/>

            <div className='left'>
                <ul>
                    <NavLink to='/eat'><li><div className='guan'>饮食记录</div></li></NavLink>
                    <NavLink to='/infor'><li><div className='guan'>基本信息</div></li></NavLink>
                    <NavLink to='/foodlist'><li><div className='guan'>食谱管理</div></li></NavLink>
                    <NavLink to='/content'><li><div className='guan'>文章管理</div></li></NavLink>
                    <NavLink to='/manager'><li><div className='guan'>管理员管理</div></li></NavLink>
                    <NavLink to='/food'><li><div className='guan'>食物信息</div></li></NavLink>
                   
                </ul>
            </div>
        </div>
    )
}

export default home
