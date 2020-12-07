import React ,{useState ,useEffect}from 'react';
import { HashRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'


import {Provider} from 'react-redux'

import Login from './ssqj/Login'
import Home from './ssqj/Home'
import Infor from './ssqj/Infor'
import Detail from './ssqj/Detail'
import Eat from './ssqj/Eat';
import Food from './ssqj/Food';
import Foodlist from './ssqj/Foodlist';

import Manager from './ssqj/Manager';
import store from './ssqj/store'


const App=()=>{
	return <Provider store={store}>
	<Router>
		<Switch>
		<Route exact path='/' component={Login} />
			<Route exit path='/home' component={Home}/>
			<Route path='/infor' component={Infor}/>
			<Route path='/detail' component={Detail} />
			<Route path='/eat' component={Eat}/>
			<Route path='/food' component={Food}/>
			<Route path='/foodlist' component={Foodlist}/>
			<Route path='/manager' component={Manager}/>
			<Route render={()=><Redirect to='/home'/>}/>
		</Switch>
	</Router>
</Provider>
}


	export default App;




// function PrivateRoute({component:Com, ...rest }) {
// 	return (
// 	  <Route
// 		{...rest}
// 		render={({ location }) =>
// 		   localStorage.getItem('userinfo')
// 		   ?<Com  {...rest}/> 
// 		   : (
// 			<Redirect
// 			  to={{
// 				pathname: "/collect",
// 				state: location 
// 			  }}
// 			/>
// 		  )
// 		}
// 	  />
// 	);
//   }
//   function RouteWithSubRoutes(route) {
// 	return (
// 	  <Route
// 		path={route.path}
// 		render={props => (
// 		  // pass the sub-routes down to keep nesting
// 		  <route.component {...props} routes={route.routes} />
// 		)}
// 	  />
// 	);
//   }
//const App = ()=>{

//私有权限路由封装

	// return <Router>
	// 	<Header/>
	// 	<Switch>
	// 	{
	// 			routes.map((props)=>{
	// 				return <RouteWithSubRoutes
	// 				{...props}/>
	// 			})
	// 		}

	// 	</Switch>
	// </Router>
//}

	// const App = ()=>{
	// return  <Provider store={store}>
	// 	<Router>
	// 	<Switch>
	// 		<Route exact path='/home' component={Home} />
	// 		<Route path='/collect' component={Collect} />
	// 		<PrivateRoute path='/shoucang' component={todos} />
	// 		<Route path='/dingdan' component={Dingdan} />
	// 		<Route path='/mytb' component={Mytb} />
	// 		<Route path='/home/search' component={Search} />
	// 		<Route path='/home/details' component={Details} />
			
	// 		{/* <Route component={Home}/> */}
	// 		<Route render={()=><Redirect to='/collect'/>} />
	// 	</Switch>
	// 	<Mytab/>
	// </Router>
	// </Provider>
	// }



// const App = ()=>{
// 	const [todos,setTodos]=useState(store.getState)
// 	useEffect(()=>{
// 		store.subscribe(()=>{
// 			setTodos(store.getState())
// 		})
// 	},[])
// 	return <div>
// 	{	todos.map((item)=><li>{item}</li>)}
// 	<button onClick={()=>{
// 		store.dispatch({type:"add_todo",value:'456'})
// 	}}>添加</button>
// 	</div>
// }


//Redux提供可预测的状态管理的容器
//解决跨层级传递属性的问题
//action是更新状态的唯一途径，就是一个普通的对象
//一定包含一个type属性
//reducer是一个纯函数，没有副作用，，有相同的输入，就一定有相同输出
//store连接action和Reducer
// let obj={user:'123'}
// let obj1=Object.assign({},obj,{user:'456'},{a:10})
// console.log(obj===obj1)
// console.log(obj,obj1)

// const App = ()=>{
// 	return <Provider store={store}>
// 		<Router>
// 			<Home/>
// 			<Input/>
// 			<Todos/>
// 		</Router>
		
// 	</Provider>
// }

// export {PrivateRoute};
// 路由基本配置
// 路由传参(以及获取参数-props)
// 动态路由(/:page)
// js跳转
// 权限路由
// npm i antd-mobile --registry https://




						{/* home组件这种配置方式会在
			Home组件的props内注入四个属性
			 
			<Route exact path='/' component={ Home } />
			<PrivateRoute path='/doc' component={ Doc } />
			 <Route path='/doc/:id' component={ Doc } /> 
			<PrivateRoute path='/tuto' component={ Tuto } />
			<PrivateRoute path='/blog' component={ Blog } />
			<Route path='/comm' component={ Comm } />
			<Route path='/login' component={ Login } /> 
			 no-match
		    <Route component={()=><div>404</div>} /> 
			<Route path='*' component={ () => <div>404</div> } /> */}






// const Home = ()=>{
// 	return <div>Home</div>
// }
// const About = (props)=>{
// 	console.log(props.location.state)
// 	return <div>About</div>
// }
// const Content = (props)=>{
// 	console.log(props)
// 	return <div>{props.match.params.page}</div>
// }
// const App = ()=>{
// 	return <Router>
// 		<ul>
// 			<li><NavLink exact activeStyle={{color:'red'}} to='/'>home</NavLink></li>
// 			<li><NavLink activeStyle={{color:'red'}} to={{
// 				pathname:'/about',
// 				state:{id:100}
// 			}}>About</NavLink></li>
// 			<li><NavLink activeStyle={{color:'red'}} to='/news'>News</NavLink></li>
// 			<li><NavLink activeStyle={{color:'red'}} to='/content/1'>content01</NavLink></li>
// 			<li><NavLink activeStyle={{color:'red'}} to='/content/2'>content02</NavLink></li>
// 		</ul>
// 		<Switch>
// 			<Route exact path='/' component={Home} />
// 			<Route path='/about' component={About}>
// 			</Route>
// 			<Route path='/news' render={()=><div>News</div>}/>
// 			<Route path='/content/:page' component={Content}/>
// 		</Switch>
// 	</Router>
// }
