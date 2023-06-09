import React, { useState, createContext } from 'react';

import usersData from '../users.json';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem('authUser');
    return user ? JSON.parse(user) : null;
  });

	const login = (username, password) => {
		const foundUser = usersData.find(
			(user) => user.username === username && user.password === password
		);

		console.log(foundUser);

		if (foundUser != null) {
			setAuthUser({ username: foundUser.username, token: foundUser.token });
			localStorage.setItem('authUser', JSON.stringify({ username: foundUser.username, token: foundUser.token }));
			return true;
		}
		
		return false;
	};

	const logout = () => {
		setAuthUser(null);
		localStorage.removeItem('authUser');
	};

	const value = {
		authUser,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export {
	AuthContext,
	AuthProvider
}