import React, { Component } from 'react'
import {addlunch} from './actionCreators';
import {connect} from 'react-redux';
import Search3 from './Search3';
class TwoFood extends Component {
    
     
    render() {
        let foodarr=[
            {name:'鲜玉米',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606546072965&di=21ed12c109e119847c6437eed3a67dd6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fce%2Fcj%2FQJ6972940103.jpg',detail:'112千卡/100g'},
            {name:'煮鸡蛋',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3405188279,268743899&fm=26&gp=0.jpg',detail:'138千卡/100g'},
            {name:'粽子',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606546160048&di=79c3e18a76452b2df231622347ccd1a2&imgtype=0&src=http%3A%2F%2Fpic.qbaobei.com%2FUploads%2FPicture%2F2016-06-08%2F5757ef1109cd5.png',detail:'195千卡/100g'},
            {name:'苹果',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606546256750&di=39f6ba496932445a8d1d04d452fc3c3e&imgtype=0&src=http%3A%2F%2Fpic14.nipic.com%2F20110524%2F2457331_002437720000_2.jpg',detail:'52千卡/100g'},
            {name:'香蕉',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3229991947,3100427209&fm=26&gp=0.jpg',detail:'89千卡/100g'},
            {name:'草莓',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1137215794,2231151138&fm=26&gp=0.jpg',detail:'32千卡/100g'},
        ];
        
        return (
            <div>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/report')}></span>
                    <span>添加食物</span>
                </div>
                <Search3 props={this.props}/>

      
            <ul id='mornfood'>{
                foodarr.map((item)=>
                    <li onClick={()=>{
                        this.props.history.push('/report');
                        return this.props.dispatch(addlunch(item.name));
                        }}>            
                            <img src={item.img} style={{width:'70px',height:'70px',marginLeft:'10px',marginTop:'10px'}}/>
                            <div style={{float:'right',marginRight:'200px',marginTop:'20px'}}>
                                <p style={{fontSize:'15px'}}>{item.name}</p>
                                <p style={{fontSize:'10px',color:'grey',paddingTop:'10px'}}>{item.detail}</p>
                            </div>                                                                         
                        </li>                
                )
                }              
                </ul>   
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    lunchfoods:state.lunchfoods,
})
export default connect(mapStateToProps)(TwoFood)