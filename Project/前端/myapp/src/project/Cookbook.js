import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './nav.css';

const Breakfast = (data,props) => {
    console.log(props.props)
    return (
        <div id="morning">{
            data.data.map((item)=><li onClick={()=>{
               props.history.push({
                  pathname:'/recommend/fooddetails',
                  img:item.img,
                  content:item.content,
                  foodname:item.foodname,
                  id:item.id
                })
            }}>
                <img id="picture" src={item.img} ></img>
            </li>
                
            )
        }
        </div>
    )
    
}
const Lunch = (data,props) => {
    return (
        <div id="lunch">{
            data.data.map((item)=><li onClick={()=>{
                this.history.push({
                  pathname:'/recommend/fooddetails',
                  img:item.img,
                  content:item.content,
                  foodname:item.foodname,
                  id:item.id
                })
            }}>
                <img id="picture" src={item.img} ></img>
            </li>
                
            )
        }
        </div>
    )
}
const Dinner = (data,props) => {
    console.log(props)
    return (
        <div id="dinner">{
            data.data.map((item)=><li onClick={(props)=>{
                props.history.push({
                  pathname:'/recommend/fooddetails',
                  img:item.img,
                  content:item.content,
                  foodname:item.foodname,
                  id:item.id
                })
            }}>
                <img id="picture" src={item.img} ></img>
            </li>
                
            )
        }
        </div>
    )
}
export {Dinner};
export {Lunch}
export {Breakfast}
export default withRouter(Breakfast)
