import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home'
import Item from './pages/Item'

function App() {
  return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/item" render={props => <Item {props} } />
				</Switch>
			</BrowserRouter>
  );
}

export default App;
