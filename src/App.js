import logo from './logo-tilt.png';
import logo2 from './logo.svg';
import './App.css';
import Navigation from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Navigation logo={logo} />
			<Footer logo={logo2} />
		</div>
	);
}

export default App;
