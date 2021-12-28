import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { useState } from 'react';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					{!isLoggedIn && <Route exact path='/' element={<Login />}></Route>}
					<Route path='/home' element={<Home />}></Route>

					<Route path='/detail/:id' element={<Detail />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
