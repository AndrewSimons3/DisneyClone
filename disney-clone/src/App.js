import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				
					
						<Login />
					
				
			</Router>
		</div>
	);
}

export default App;
