import React, { createContext } from 'react';
import AuthStorage from '../utils/AuthStorage';

const AuthStorageContext = createContext(null);

const AuthStorageProvider = ({ children }) => {
	const authStorage = new AuthStorage();

	return (
		<AuthStorageContext.Provider value={authStorage}>
			{children}
		</AuthStorageContext.Provider>
	);
};

export { AuthStorageContext, AuthStorageProvider };
