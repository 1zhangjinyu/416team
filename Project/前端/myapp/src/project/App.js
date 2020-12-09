import React from 'react';
import {HashRouter as Router,Redirect,Route,NavLink,Switch,privateRoute} from 'react-router-dom'
import { Provider } from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';
import Login from './pages/Login';
import Weight from './pages/Weight';
import FoodRank from './pages/FoodRank';
import Compare from './pages/Compare';
//import Mytab from './Mytab';
import Home from './pages/Home';
import Search from './pages/Search';
import Search1 from './pages/Search1';
import My from './pages/My';
import Recommend from './pages/Recommend';
import Fooddetails from './pages/Fooddetails';
import store from './Store'
import Report from './pages/Report'
import OneFood from './pages/OneFood';
import TwoFood from './pages/TwoFood';
import ThreeFood from './pages/ThreeFood';
import AddWeight from './pages/AddWeight';
import Health from './pages/Health';
import Trends from './pages/Trends';
import Collect from './pages/Collect';
import Food from './pages/Food';
//import Information from './pages/information';
import TestWrapper from './pages/information';

const App = ()=>{
	return <Provider store={store}>
	<Router>
    <Switch>
			<Route exact path='/' component={Login} />
			<Route path='/weight' component={TestWrapper} />
			<Route exact path='/home' component={Home}/>
            <Route path='/home/search' component={Search}/>
            <Route path="/home/rank" component={FoodRank}/>
            <Route path="/home/com" component={Compare}/>
			<Route path="/home/search1" component={Search1}/>
			<Route exact path="/recommend" component={Recommend}/>
			<Route path="/recommend/fooddetails" component={Fooddetails}/>
            <Route exact path="/my" component={My}/>
			<Route path="/my/trends" component={Trends}/>
			<Route path="/my/collect" component={Collect}/>
			<Route path="/my/food" component={Food}/>
			<Route path="/my/information" component={Weight}/>
			<Route exact path="/recommend" component={Recommend}/>
			<Route path="/home/fooddetails" component={Fooddetails}/>
			<Route exact path="/report" component={Report}/>
			<Route path="/report/onefood" component={OneFood}/>
			<Route path="/report/twofood" component={TwoFood}/>
			<Route path="/report/threefood" component={ThreeFood}/>
			<Route path="/report/addweight" component={AddWeight}/>
			<Route path="/home/health" component={Health}/>

            
            
	</Switch>
		
	</Router>
	</Provider>
}
export default App;