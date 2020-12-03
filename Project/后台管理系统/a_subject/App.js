import React, { Component } from 'react'
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import provider, { Provider } from 'react-redux'


import Login from './Login'
import Manager from './Manager'
import Home from './Home'
import Head from  './head'
import Infor from './Infor'
import Collection from './Collection'

import store from './Store';
import InfoDetail from './InfoDetail'


//import

 class App extends Component {
    render() {
        return (<Provider store={store}>
			<Router>
				<Switch>
					{/* <Route exact path='/' component={Login} /> */}
				{/* <Login /> */}
				{/* <Home /> */}
				{/* <Head /> */}
				{/* < Collection/> */}
				{/* <Infor /> */}
				<Route exact path='/home' component={Home}/>
				<Route  path="/infor" component={Infor}/>
				<Route  path="/detail" component={InfoDetail}/>
				{/* <Manager /> */}
				</Switch>
			</Router>
	</Provider >

        )
    }
}
export default App;
