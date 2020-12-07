import React, { Component } from 'react'
import '../css/nav.css'
import {connect} from 'react-redux';
let arr = [];
class Compare extends Component {
    mounted=(arr)=>{
        for(var i in arr){
            if(i == 'img'){
                arr[i]=arr[i];
            }
            else{
                arr[i]=Math.ceil(arr[i])
          }
        }
        return arr;
      }
    render() {
        const {comparefoods} = this.props;
        let arr1 = Object.assign({},comparefoods[0]);
        let arr2 = Object.assign({},comparefoods[1]);
        arr1 = this.mounted(arr1);
        this.mounted(arr2);
        console.log(comparefoods);
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'rgb(247,240,240)'}}>
                 <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>{
                        this.props.history.push('/home');
                        return this.props.dispatch({
                            type:'DELETE_COMPARE'
                        })
                        }}></span>
                    <span>对比详情</span>
                </div>
                <div style={{width:'100%',height:'150px',backgroundColor:'rgb(247,240,240)'}}>
                <div id="comleft" onClick={()=>this.props.history.push('/home/search1')}>
                    <p style={{fontSize:'30px',paddingLeft:'35px',lineHeight:'90px',color:'red',position:'absolute'}}>+</p>
                    <img src={arr1.img} className="compare-img"/>
                </div>
                <img src={require('../image/vs.png')} style={{width:'50px',height:'50px',marginLeft:'10%',marginTop:'50px'}}/>
                <div id="conright" onClick={()=>this.props.history.push('/home/search1')}>
                    <p style={{fontSize:'30px',paddingLeft:'35px',lineHeight:'90px',color:'red',position:'absolute'}}>+</p>
                    <img src={arr2.img} className="compare-img"/>
                </div>
                </div>
                <div style={{width:'100%',height:'600px',backgroundColor:'white'}}>
                    <p style={{fontSize:'18px',textAlign:'center',paddingTop:'20px'}}>营养元素</p>
                    <table className="compare-table">
                        <tr>
                            <td>{arr1.heat}</td>
                            <td>热量</td>
                            <td>{arr2.heat}</td>
                        </tr>
                        <tr>
                            <td>{arr1.protein}</td>
                            <td>蛋白质</td>
                            <td>{arr2.protein}</td>
                        </tr>
                        <tr>
                            <td>{arr1.fat}</td>
                            <td>脂肪</td>
                            <td>{arr2.fat}</td>
                        </tr>
                        <tr>
                            <td>{arr1.co3}</td>
                            <td>碳水化合物</td>
                            <td>{arr2.co3}</td>
                        </tr>
                        <tr>
                            <td>{arr1.fiber}</td>
                            <td>膳食纤维</td>
                            <td>{arr2.fiber}</td>
                        </tr>
                        <tr>
                            <td>{arr1.gi}</td>
                            <td>GI</td>
                            <td>{arr2.gi}</td>
                        </tr>
                        <tr>
                            <td>{arr1.gl}</td>
                            <td>GL</td>
                            <td>{arr2.gl}</td>
                        </tr>
                        <tr>
                            <td>{arr1.wa}</td>
                            <td>维生素A</td>
                            <td>{arr2.wa}</td>
                        </tr>
                        <tr>
                            <td>{arr1.wc}</td>
                            <td>维生素C</td>
                            <td>{arr2.wc}</td>
                        </tr>
                        <tr>
                            <td>{arr1.we}</td>
                            <td>维生素E</td>
                            <td>{arr2.we}</td>
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