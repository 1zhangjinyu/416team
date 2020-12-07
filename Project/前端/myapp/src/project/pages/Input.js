import React, { Component } from 'react'
import './nav.css';

class Input extends Component{
    render() {
        return (
            <div>
              
                <input
                className="record"
                id='inp'
                //ref={inp=>this.input=inp}
                value={this.props.inpValue} 
                type="text"
                placeholder="记录体重"
                onChange={this.props.handleChange}
                />
                <input value={this.inpValue} style={{marginLeft:'10px',border:'1px solid black',borderRadius:'5px',backgroundColor:'rgb(245,245,249)'}} type="date" />   

                <button className="sure" onClick={this.props.addTodo}>确定</button>
            </div>
        )
    }
}
export default Input;

