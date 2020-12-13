import React, { Component } from 'react'
import '../css/style.css'
import {fadongtai} from '../actionCreators'
import {connect} from 'react-redux';
import ImagePickerExample from './App';

class Dongtai extends Component {
    constructor(props){
        super(props)
        this.state = {
            inptext:'',
            inpimg:''
        }
    }
    textChange = (e)=>{
        this.setState({inptext:e.target.value})
    }
    imgChange = (e)=>{
        this.setState({inpimg:e.target.value})
        
    }
    // handleFileChange(e){
    //     let file =  e.currentTarget.files[0]
    //     let reader = new FileReader()
        
    //     reader.onload = function () {
    //       document.getElementById("show").src=reader.result
    //       console.log(reader.result)
    //     }

    //     reader.readAsDataURL(file)
    // }
    render() {
        let data = {inptext:this.state.inptext,imgsrc:this.state.inpimg};
        
        return (
            <div>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/recommend')}></span>
                    <span>分享我的美食</span>
                </div>
                <div>
                    <div className="dt">
                        <form style={{width:'100%'}}>
                            <textarea 
                            className='word'
                            value={this.state.inptext} 
                            onChange={this.textChange}
                            >
                            </textarea>
                            <div className='imgdiv'>
                                {/* <div className='iconfont icon-tubiaozhizuomoban-1'>
                                    <div id="show" onLoad={this.handleFileChange}></div>
                                    <input 
                                    className='chooseimg' 
                                    type="file"
                                    value={this.state.inpimg}
                                    onChange={this.imgChange}
                                    />

                                </div> */}
                                
                                <ImagePickerExample />
                            </div>
                            <div style={{height:'50px',width:'100%',backgroundColor:'white'}}></div>
                            <button className='sub' type="submit" onClick={()=>{
                                this.props.dispatch(fadongtai(data))
                                this.props.history.push('/recommend')
                                return
                            }}>发表</button>
                        </form>
                    </div>
                </div> 
            </div>
            
        )
    }
}
const mapStateToProps = (state) =>({
    dongtai:state.dongtailist.dongtai
})
export default connect(mapStateToProps)(Dongtai)
