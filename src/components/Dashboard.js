import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "./Auth";
import TodoList from "./TodoList";
import './Dashboard.css';

const Dashboard = () => {
	const history = useHistory();

	const { authUser, logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	return (
		<div className="container">
			<h1>Welcome {authUser.username}</h1>
			<div className="nav">
				<button onClick={handleLogout}>Logout</button>
			</div>
			<TodoList />
		</div>
	);
};

export default Dashboard;