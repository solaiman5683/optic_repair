import React, { createContext, useContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const allData = useFirebase();
	return (
		<AuthContext.Provider value={allData}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
