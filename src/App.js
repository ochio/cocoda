import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home'
import Item from './pages/Item'
import Message from './pages/Message'
import Preview from './pages/Preview'
import Pay from './pages/Pay'

import './scss/style.scss';

function App() {
  return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/item/:id" component={Item}/>
					<Route path="/message" component={Message}/>
					<Route path="/preview" component={Preview}/>
					<Route path="/pay" component={Pay}/>
				</Switch>
			</BrowserRouter>
  );
}

export default App;
