import React, { Component } from 'react'
import {health} from '../actionCreators';
import {connect} from 'react-redux';
import {weights} from '../actionCreators'
import '../css/nav.css'

class AddWeight extends Component{
    constructor(props){
        super(props);
        this.state={
            inpValue:0
        }
    }
    componentDidMount(){
        this.props.dispatch(health())
    }
    handleChange=(e)=>{
        this.setState({inpValue:e.target.value})
    }
    
    render(){
        console.log(this.props.health);
        let arr1 = this.props.health.sevenweight;
        let arr2 = this.props.health.sevendate;
        
        return <div>
            <div className="report-header">
                <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/report')}></span>
                <span>记录体重</span>
            </div>
            <input 
            className="record"
            value={this.state.inpValue} 
            type="text"
            placeholder="记录体重"
            onChange={this.handleChange}/>
            <button className="sure" onClick={(value)=>{this.props.dispatch(weights(this.state.inpValue))}}>确定</button>
            <div style={{marginTop:'50px'}}>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[0]?arr1[0]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[0]?arr2[0].slice(0,4)+'年'+arr2[0].slice(4,6)+'月'+arr2[0].slice(6,8)+'日':''}</span></p>
                </div>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[1]?arr1[1]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[1]?arr2[1].slice(0,4)+'年'+arr2[1].slice(4,6)+'月'+arr2[1].slice(6,8)+'日':''}</span></p>
                </div>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[2]?arr1[2]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[2]?arr2[2].slice(0,4)+'年'+arr2[2].slice(4,6)+'月'+arr2[2].slice(6,8)+'日':''}</span></p>
                </div>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[3]?arr1[3]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[3]?arr2[3].slice(0,4)+'年'+arr2[3].slice(4,6)+'月'+arr2[3].slice(6,8)+'日':''}</span></p>
                </div>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[4]?arr1[4]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[4]?arr2[4].slice(0,4)+'年'+arr2[4].slice(4,6)+'月'+arr2[4].slice(6,8)+'日':''}</span></p>
                </div>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[5]?arr1[5]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[5]?arr2[5].slice(0,4)+'年'+arr2[5].slice(4,6)+'月'+arr2[5].slice(6,8)+'日':''}</span></p>
                </div>
                <div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                    <p style={{fontSize:'15px',marginTop:'10px'}}>{arr1[6]?arr1[6]+'千克':''}<span style={{fontSize:'15px',marginLeft:'80px'}}>{arr2[6]?arr2[6].slice(0,4)+'年'+arr2[6].slice(4,6)+'月'+arr2[6].slice(6,8)+'日':''}</span></p>
                </div>
            </div>
                {/* <div style={{marginTop:'50px'}}>
               
                    this.props.weights.map((item)=><div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                        <p style={{fontSize:'15px',marginTop:'10px'}}>{item.neww}千克<span style={{fontSize:'15px',marginLeft:'80px'}}>{item.dates.slice(0,4)}年{item.dates.slice(4,6)}月{item.dates.slice(6,8)}日</span></p>
                    </div>)
            </div> */}
        </div>
    }
}
const mapStateToProps = (state) =>({
    weights:state.weightlist.weights,
    health:state.healthlist.health
  })
export default connect(mapStateToProps)(AddWeight)

