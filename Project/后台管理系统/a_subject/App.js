import React, { Component } from 'react'
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import provider, { Provider } from 'react-redux'


import Login from './Login'
import Manager from './Manager'
import home from './home'
import Head from  './head'
import Infor from './Infor'
import Collection from './Collection'

import store from './Store';


//import

 class App extends Component {
    render() {
        return (<Provider store={store}>
			<Router>
				<switch>
					{/* <Route exact path='/' component={Login} /> */}
				{/* <Login /> */}
				{/* <home /> */}
				{/* <Head /> */}
				{/* < Collection/> */}
				<Infor />
				{/* <Manager /> */}
				</switch>
			</Router>
	</Provider >

        )
    }
}
export default App;
