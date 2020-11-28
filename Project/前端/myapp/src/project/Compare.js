import React, { Component } from 'react'
import './nav.css'
import {connect} from 'react-redux';
let arr = [];
class Compare extends Component {
    componentDidMount(){
        const {comparefoods} = this.props;
        const arr = comparefoods;
        return arr;
    }
    render() {
        const {comparefoods} = this.props;
        console.log(comparefoods.fname);
        console.log(arr)
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'rgb(247,240,240)'}}>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>对比详情</span>
                </div>
                <div style={{width:'370px',height:'150px',backgroundColor:'rgb(247,240,240)'}}>
                <div id="comleft" onClick={()=>this.props.history.push('/home/search1')}>
                    <p style={{fontSize:'30px',paddingLeft:'35px',color:'red',position:'absolute'}}>+</p>
                </div>
                <img src={require('./image/vs.png')} style={{width:'50px',height:'50px',marginLeft:'-160px',marginTop:'50px'}}/>
                <div id="conright" onClick={()=>this.props.history.push('/home/search1')}>
                    <p style={{fontSize:'30px',paddingLeft:'35px',color:'red'}}>+</p>
                </div>
                </div>
                <div style={{width:'100%',height:'600px',backgroundColor:'white'}}>
                    <p style={{fontSize:'18px',textAlign:'center',paddingTop:'20px'}}>营养元素</p>
                    <p style={{color:'#ccc'}}>  ___________________________________________________________</p>
                    <table >
                <tr>
                    <td>{arr.heat}</td>
                    <td>热量</td>
                    <td>{comparefoods.heat}</td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>蛋白质</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>脂肪</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>碳水化合物</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>膳食纤维</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>GI</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>GL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>维生素A</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>维生素C</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{comparefoods.heat}</td>
                    <td>维生素E</td>
                    <td></td>
                </tr>
            </table>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    comparefoods:state.comparefoods
  })
  export default connect(mapStateToProps)(Compare)