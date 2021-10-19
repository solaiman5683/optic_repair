import logo from './logo-tilt.png';
import logo2 from './logo.svg';
import './App.css';
import Navigation from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import ServiceDetails from './Components/ServiceDetails/details';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blogs from './Components/Pages/Blogs/Blogs';
import Blog from './Components/Blog/Blog';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Navigation logo={logo} />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/home'>
							<Home />
						</Route>

						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/registration'>
							<Registration />
						</Route>
						<PrivateRoute path='/blogs'>
							<Blogs />
						</PrivateRoute>
						<PrivateRoute path='/service/:id'>
							<ServiceDetails />
						</PrivateRoute>
						<PrivateRoute path='/blog/:id'>
							<Blog />
						</PrivateRoute>
						<Route>
							<NotFound />
						</Route>
					</Switch>
					<Footer logo={logo2} />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
