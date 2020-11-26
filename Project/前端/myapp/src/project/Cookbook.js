import React, { Component } from 'react'
import './nav.css';
class Breakfast extends Component {
    render() {
        let arr=['https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00679-3288.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1895037277,3199019854&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2517943680,1479891239&fm=26&gp=0.jpg',
]
        return (           
                <div id="morning">{
                    arr.map((item)=>
                        <img id="picture" src={item}></img>
                    )
                }
                </div>            
        )
    }
}

class Lunch extends Component {
    render() {
        let arr=[
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258033031,1196083719&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005779767,1621209550&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2304171237,4096663632&fm=26&gp=0.jpg',    
]
        return (        
             <div id="morning">{
                    arr.map((item)=>
                        <img id="picture" src={item}></img>
                    )
                }
                </div>            
        )
    }
}

class Dinner extends Component {
    render() {
        let arr=[
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2741553010,2122120810&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1689433545,3167262103&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2132254289,481893094&fm=26&gp=0.jpg'
]
        return (           
                <div id="morning">{
                    arr.map((item)=>
                        <img id="picture" src={item}></img>
                    )
                }
                </div>            
        )
    }
}
export {Dinner}
export {Breakfast}
export {Lunch}