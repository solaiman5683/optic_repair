import logo from './logo-tilt.png';
import logo2 from './logo.svg';
import './App.css';
import Navigation from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import ServiceDetails from './Components/ServiceDetails/details';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navigation logo={logo} />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/:id'>
						<ServiceDetails />
					</Route>
					<Route path='/login'>
						<h1 className='text-center'>Hello From Login</h1>
					</Route>
					<Route path='/signup'>
						<h1 className='text-center'>Hello From Signup</h1>
					</Route>
					<Route>
						<h1 className='text-center'>Page Not Found</h1>
					</Route>
				</Switch>

				<Footer logo={logo2} />
			</Router>
		</div>
	);
}

export default App;
