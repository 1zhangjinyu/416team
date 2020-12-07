import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
// import App from './pages/app';
// import Hoc,{Detail} from './pages/hoc'
// import Hook from './pages/Hook'
// import Context from './pages/context'
// import Control from './components/control'
// import TodoList from './xueli0930/TodoList'
import App from './App';
import Home from './ssqj/Home'
import 'antd-mobile/dist/antd-mobile.css';


ReactDOM.render(
  // <Context.Provider value='123'> <Hook/></Context.Provider>,

  <App />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




//const List = (props)=>{
// alt shift + 上下键   复制一行
// alt + 上下键         移动一行
// 按住alt ，鼠标点击
// Ctrl + shift + 左右键，选中整个单词
// ctrl+shift+L 




// const Buttons = ()=>{
//   const btns = [1,2,3,4,5];
//   return <div>
//     {
//       btns.map((item)=><button>{item}</button>)
//     }
//   </div>
// }



// let ele = <h1 id = "title" className = "tit" >
//     <div > hello </div>
//     react
//     </h1>;
// console.log(ele)

// let ReactDOM = {
//     render(eleObj, container) {
//         //解构
//         const { type, props } = eleObj;
//         //创建第一层结点
//         let ele = document.createElement(type);
//             //遍历属性对象，将属性添加到第一层节点对象
//             for (const prop in props) {
//                 // if(prop=="classname"){
//                 //     ele.setAttribute("class",props[prop]);
//                 // }
//                 if (prop == "children") {
//                     //将第一层节点对象的子元素添加进去
//                     props.children.forEach((child) => {
//                             if (typeof child == "string") {
//                                     const txtNode = document.createTextNode(props[prop]);
//                                     ele.appendChild(txtNode);
//                                 }else{
//                                     ReactDOM.render(child, ele);
//                                 }
//                             })
//                     }else {
                        
//                         ele[prop] = props[prop];
//                     }
//                 }
//                 //将第一层DOM节点添加到container中
//                 container.appendChild(ele);
//             }
//     }




//组件声明
//函数组件
//UI（展示）组件
// function App(props){
//     const{title,id}=props;
//     return<div>
//         <App/>
//         <div>{title}</div>
// <div>{id}</div>
//     </div>
// }

// //智能组件
// class Demo extends React.Component{
//     constructor(){
//         super();
//         //声明状态
//         this.state={
//             name:new Date().toLocaleString
//         }
//         setInterval(() => {
            
//         }, 1000);(()=>{
//             this.setState({name:new Date().toLocaleString
//         },3000);
//     }
//     render(){
//         return <div>
//             <div>name:{this.state.name}</div>
//             <App title="abc" id="app"/ >
//             <App title="abc" id="app"/ >
//         </div>
//     }
// }