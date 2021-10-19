import { useEffect, useState } from 'react';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import FirebaseConfig from '../firebase.config';

FirebaseConfig();
const useFirebase = () => {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	const handleGoogleLogin = () => signInWithPopup(auth, googleProvider);

	const handleLogin = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const handleRegister = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setUser('');
			}
		});
	}, [auth]);

	const logout = () => signOut(auth).then(() => setUser([]));

	return {
		user,
		setUser,
		loading,
		setLoading,
		handleGoogleLogin,
		handleLogin,
		handleRegister,
		logout,
	};
};

export default useFirebase;
