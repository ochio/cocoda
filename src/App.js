import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home'
import Item from './pages/Item'
import Message from './pages/Message'

function App() {
  return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/item/:id" component={Item}/>
					<Route path="/message" component={Message}/>
				</Switch>
			</BrowserRouter>
  );
}

export default App;
