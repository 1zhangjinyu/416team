import React, { Component } from 'react'

import {connect} from 'react-redux';
import {weights} from './actionCreators'
import './nav.css'

class AddWeight extends Component{
    constructor(props){
        super(props);
        this.state={
            inpValue:''
        }
    }
    // componentDidMount(){
    //     this.props.dispatch(weights('45'))
    // }
    handleChange=(e)=>{
        this.setState({inpValue:e.target.value})
    }
    
    render(){
        console.log(this.props.weights)
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
                {
                    this.props.weights.map((item)=><div style={{width:'80%',borderBottom:'1px solid rgb(86,186,186)',textAlign:'center',margin:'0 auto',borderRadius:'5px',height:'30px'}}>
                        <p style={{fontSize:'15px',marginTop:'10px'}}>{Math.floor(item.neww)}千克<span style={{fontSize:'15px',marginLeft:'80px'}}>{item.dates.slice(0,4)}年{item.dates.slice(4,6)}月{item.dates.slice(6,8)}日</span></p>
                        {/* <span style={{fontSize:'10px'}}></span> */}
                    </div>)
                }
            </div>
        </div>
    }
}
const mapStateToProps = (state) =>({
    weights:state.weightlist.weights
  })
export default connect(mapStateToProps)(AddWeight)

// export default class AddWeight extends Component {
//     constructor(){
//         super();
//         this.state={
//             inpValue:'',
//             todos:[]

//         }
//     }
//     handleChange=(e)=>{
//      this.setState({inpValue:e.target.value})
//     }
//     componentDidMount(){
//         let todos=localStorage.getItem('todos');
//         if(todos){
//             this.setState({
//                 todos:JSON.parse(todos)
//             })
//         }
//     }
//     componentDidUpdate(preProps,preState){
//         if(preState.todos!==this.state.todos){
//             localStorage.setItem(
//             'todos',
//             JSON.stringify(this.state.todos)
//         )
//         }
        
//     }
// addTodo=(todos)=>{

// //添加若为空则不添加
//     if(this.state.inpValue==''){
//         return;
//     }
// this.setState({
//     todos:[
//         {
//             title:this.state.inpValue,
//             done:false
//         },
//     ...this.state.todos
//         ]
//     })

//     this.setState({inpValue:''})
// }
// deleteTodo=(idx)=>{
// this.setState({
//     todos:this.state.todos.filter((item,index)=>index!=idx)
// });
// localStorage.setItem('todos',JSON.stringify(this.state.todos))
    
// }
// toggle=(index)=>{
//     let newTodos=JSON.parse(JSON.stringify(this.state.todos))
//     newTodos[index].done=!newTodos[index].done;
   
//        this.setState({
       
//         todos:newTodos
//     }) 
//     }
//  renderTodos=(done)=>{
//             return  this.state.todos.map((todo,idx)=>{
//                 if(done==todo.done){
//                  return  <li className="dayweight">
//                      {/* <input 
//                      onClick={()=>this.toggle(idx)}
//                      checked={done}
//                      type="checkbox"
//                      /> */}


//                      <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
//                      {/* <input style={{marginLeft:'10px',border:'1px solid black',borderRadius:'5px',backgroundColor:'rgb(245,245,249)'}} type="date" />    */}
//                      <button style={{marginLeft:'10px'}} onClick={()=>this.deleteTodo(idx)}>删除</button>


//                          </li>              
//                 }
//             }) 

//         }
//     render() {
//         const {todos,inpValue}=this.state;
//         return (
//             <div>
//                <div className="report-header">
//                     <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/report')}></span>
//                     <span>记录体重</span>
//                 </div>
//                 <div className="box">
//          <Input inpValue={inpValue} addTodo={this.addTodo} handleChange={this.handleChange}/>
//          <List todos={todos} renderTodos={this.renderTodos}/>
//        </div>
//             </div>
//         )
//     }
// }
