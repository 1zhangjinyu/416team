import React from 'react';
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import { Provider } from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';
import Login from './Login';
import Weight from './Weight';
import FoodRank from './FoodRank';
import Compare from './Compare';
import Mytab from './Mytab';
import Home from './Home';
import Search from './Search';
import Search1 from './Search1';
import My from './My';



const App = ()=>{
	return <Router>
    <Switch>
			<Route exact path='/' component={Login} />
			<Route path='/weight' component={Weight} />
			<Route exact path='/home' component={Home}/>
            <Route path='/home/search' component={Search}/>
            <Route path="/home/rank" component={FoodRank}/>
            <Route path="/home/com" component={Compare}/>
			<Route path="/home/search1" component={Search1}/>
            <Route path="/my" component={My}/>
            
            
	</Switch>
		<Mytab />
	</Router>
}
export default App;