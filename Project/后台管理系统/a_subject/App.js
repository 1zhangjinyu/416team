import React, { Component } from 'react'
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import provider, { Provider } from 'react-redux'


import Login from './Login'
import Manager from './Manager'
import home from './Home'
import Head from  './Head'
import Infor from './Infor'
import Collection from './Collection'

import store from './Store';


//import

 class App extends Component {
    render() {
        return (<Provider store={store}>
			<Router>
				<switch>
					<Route exact path='/' component={Login} />
					{/* <Route path='home' component={Home} /> */}
				{/* < Collection/> */}
				{/* <Route path='/collection' component={Collection} /> */}
				<Route path='/infor' component={Infor} />
				{/* <Manager /> */}
				<Route path='/manager' component={Manager} />
				</switch>
			<Head />

			</Router>
	</Provider >

        )
    }
}
export default App;
