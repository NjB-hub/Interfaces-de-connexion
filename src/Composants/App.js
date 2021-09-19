import Banner from './Banner'
import logo from '../assets/logo.png'
import Footer from './Footer'
import Login from './Login'
import SignUp from './SignUp'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 



function App() {
	return (

		
		<div className="container">
	

			<Router>    
		
			  <div className="container">    
		
				<nav className="navbar navbar-expand-lg navheader">    
		
				  <div className="collapse navbar-collapse" >    
		
					<ul className="navbar-nav mr-auto">    
		
					  <li className="nav-item">    
		
						<Link to={'/Login'} className="nav-link">Login</Link>    
		
					  </li>    
		
					  <li className="nav-item">    
		
						<Link to={'/SignUp'} className="nav-link">Sign Up</Link>    
		
					  </li>    
		
		
					</ul>    
		
				  </div>    
		
				</nav> <br />    
		
				<Switch>    
		
				  <Route exact path='/Login' component={Login} />    
		
				  <Route path='/SignUp' component={SignUp} />    
		
		
				</Switch>    
		  
		
			  </div>    
		
			</Router>  
		
			
		</div>
	);
}

export default App;
