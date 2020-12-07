import React, { Component } from 'react'
import {connect} from 'react-redux';
import {myfoods} from '../actionCreators'

class Food extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    
    render() {
        let arr = this.props.myfoods.myfoods
        console.log(this.props)
        console.log(this.props.myfoods)
        return (
            <div>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/my')}></span>
                    <span>我的食物</span>
                </div>
                <div>
                    {
                        this.props.myfoods.map((item) =>
                            <li style={{marginTop:'10px',marginLeft:'5px',width:'360px',height:'90px',backgroundColor:'white',borderColor:'black',borderRadius:'10px'}}>
                                <img src={item.img} style={{ width: '70px', height: '70px', marginLeft: '10px', marginTop: '10px' }} />
                                <div style={{ float: 'right', marginRight: '200px', marginTop: '20px' }}>
                                    <p style={{ fontSize: '15px' }}>{item.fname}</p>
                                    <p style={{ fontSize: '10px', color: 'grey', paddingTop: '10px' }}>{item.heat}kcal</p>
                                </div>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    myfoods:state.myfoodslist
  })
export default connect(mapStateToProps)(Food)