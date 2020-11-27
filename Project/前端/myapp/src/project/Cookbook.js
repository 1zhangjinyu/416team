import React, { Component } from 'react'
import './nav.css';

const Breakfast = (data) => {
    return (
        <div id="morning">{
            data.data.map((item)=><li onClick={()=>{
                this.props.history.push({
                  pathname:'/home/detail',
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
const Lunch = (data) => {
    return (
        <div id="lunch">{
            data.data.map((item)=><li onClick={()=>{
                this.props.history.push({
                  pathname:'/home/detail',
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
const Dinner = (data) => {
    return (
        <div id="dinner">{
            data.data.map((item)=><li onClick={()=>{
                this.props.history.push({
                  pathname:'/home/detail',
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
export {Dinner}
export {Breakfast}
export {Lunch}