import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import './App.css';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';

// Authenticated view

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<Provider store={store}>
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<ProtectedRoute path="/dashboard">
							<Dashboard />
						</ProtectedRoute>
					</Switch>
				</Provider>
			</AuthProvider>
		</Router>
	);
}

export default App;