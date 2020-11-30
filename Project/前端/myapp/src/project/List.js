import React, { Component } from 'react'

 class List extends Component {
    render() {
        let arr1=this.props.todos.filter((item)=>!item.done)
        return (
            <div>
                <ul>
                   {this.props.renderTodos(false)} 
                </ul>
                    <ul>
                    {this.props.renderTodos(true)}
                    </ul>
            </div>
        )
    }
}
export default List;