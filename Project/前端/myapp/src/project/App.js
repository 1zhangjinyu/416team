import React from 'react';
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import { Provider } from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';
import Login from './Login';
import Weight from './Weight';


const App = ()=>{
	return <Router>
    <Switch>
			<Route exact path='/' component={Login} />
			
            <Route path='/weight' component={Weight} />
            
		</Switch>
		
	</Router>
}
export default App;

