import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
					
						<Login />
					
				
			</Router>
		</div>
	);
}

export default App;
