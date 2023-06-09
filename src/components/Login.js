import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { AuthContext } from "./Auth";

const Login = () => {
	const history = useHistory();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { authUser, login } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (login(username, password)) {
			history.push('/dashboard');
		} else {
			alert('Invalid credentials');
		}
	};

	return (
		<Route
			render={({ location }) =>
				authUser ? (
					<Redirect to={{ pathname: '/dashboard', state: { from: location } }} />
				) : (
					<div>
						<h1>Log in</h1>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Username"
							/>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
							/>
							<button type="submit">Log in</button>
						</form>
					</div>
				)
			} />
	);
}

export default Login;