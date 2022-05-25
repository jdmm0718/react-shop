import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.scss';

const App = () => {
	return (
		<BrowserRouter>
			<switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="recovery-password" component={RecoveryPassword} />
					<Route component={NotFound} />
				</Layout>
			</switch>
		</BrowserRouter>
		
	);
}

export default App;