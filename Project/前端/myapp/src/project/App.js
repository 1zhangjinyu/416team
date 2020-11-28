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
import Recommend from './Recommend';
import Fooddetails from './Fooddetails';
import store from './Store'
import Report from './Report'




const App = ()=>{
	return <Provider store={store}>
	<Router>
    <Switch>
			<Route exact path='/' component={Login} />
			<Route path='/weight' component={Weight} />
			<Route exact path='/home' component={Home}/>
            <Route path='/home/search' component={Search}/>
            <Route path="/home/rank" component={FoodRank}/>
            <Route path="/home/com" component={Compare}/>
			<Route path="/home/search1" component={Search1}/>
			<Route exact path="/recommend" component={Recommend}/>
			<Route path="/recommend/fooddetails" component={Fooddetails}/>
            <Route path="/my" component={My}/>
			<Route exact path="/recommend" component={Recommend}/>
			<Route path="/home/fooddetails" component={Fooddetails}/>
			<Route exact path="/report" component={Report}/>
            
            
	</Switch>
		
	</Router>
	</Provider>
}
export default App;