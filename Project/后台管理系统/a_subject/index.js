import React from 'react';
import ReactDOM from 'react-dom';
//import App from './react/app.js';
import App from './App';
import Login from './project/Login'
import 'antd-mobile/dist/antd-mobile.css'
import Weight from './project/Weight';
ReactDOM.render(
  <App />,
   document.getElementById('root')
 );


//let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
// let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
// fetch(url,{
//   method:'post',
//   headers:{
//     'Content-Type':'application/json'
//   },
// })
// .then(res=>res.json())
// .then(res=>console.log(res));

// let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist';
// fetch(url,{
//   method:'post',
//   headers:{
//     'Content-Type':'application/json'
//   },
// })
// .then(res=>res.json())
// .then(res=>console.log(res.data));




// const Buttons = ()=>{
//   const btns = [1,2,3,4,5];
//   return <div>
//     {
//       btns.map((item)=><button key={item}>{item}</button>)
//     }
//   </div>
// }
//展示数据

    // return <ul>
    //  {
    //    data.map((item)=><li>{item.title}</li>)
    //  }

    // return <div>
    //     <Buttons />
    //     <List data={data} />
    // </div>

//智能组件
// class Demo extends React.Component{
//   constructor(){
//     super();
//     //声明状态
//     this.state = {
//       name:new Date().toLocaleString()
//     }
//     setTimeout(()=>{
//       this.setState({name: new Date().toLocaleString()})
//     },1000)
//   }
//   render(){
//     return <div>
//       <div>name:{this.state.name}</div>
//       <App title={this.state.name} id='任意值'/>
//       <App title='app' id='任意值'/>
//     </div>
//   }
// }

//组件声明
//函数组件
//UI组件 展示组件 木偶组件
// function App(props){
//   console.log(props);
//   const {title,id}=props;
//   return<div>
//     <div>{title}</div>
//     <div>{id}</div>
//   </div>
// }
// ReactDOM.render(
//   <App title="任意值" />,
//    document.getElementById('root')
//  );

//let ele = React.createElement('h1',{id:'title'},'hello react');
//let ele = React.createElement('h1',{id:'title'},React.createElement('div',{},'hello'),'react');
//console.log(ele);
// let ele = <h1 id="title" className="tit">hello react<div>hello</div>
// <div>当前时间</div>
// {
//   new Date().toLocaleString()
// }
// </h1>;

//将 JSX对象渲染到DOM中
// let ReactDOM = {
//   render(eleObj,container){
//     //解构
//     const{type,props}=eleObj;
//     //创建第一层节点
//     let ele = document.createElement(type);
//     //遍历属性对象，将属性添加到第一层节点对象上
//     for (const prop in props) {
//       if(prop =='children'){
//         if(typeof props.children=='string'){
//             const txtNode = document.createTextNode(props.children);
//             ele.appendChild(txtNode);
//             break;
//         }
//         //将第一层节点对象的子元素添加进去
//         props.children.forEach((child)=>{
//           if(typeof child=='string'){
//             const txtNode = document.createTextNode(child);
//             ele.appendChild(txtNode);
//         }
//           else{
//             ReactDOM.render(child,ele);
//           }
//         });
//       }
//       else{
//         ele[prop] = props[prop]; //ele.setAttribute('class',props[prop]);
//       }
//     }
//     //将第一层DOM节点添加到container
//     container.appendChild(ele);
//   }
// }





/*
一、
1.原生JS，DOM操作（jQ）
2.React：开发效率高、性能高
3.环境搭建、创建一个项目、运行
4.JSX语法
*/
/*
二、
alt shift +上下键   复制一行
alt+上下键          移动一行
按住alt，鼠标点击
ctrl+shift+左右键  选中整个单词
ctrl+shift+l 
*/