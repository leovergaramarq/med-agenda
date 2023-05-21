import { useContext } from 'react';
import { AuthStorageContext } from '../contexts/AuthStorageContext';

const useAuthStorage = () => {
	const authStorage = useContext(AuthStorageContext);

	if (!authStorage) {
		throw new Error(
			'useAuthStorage must be used within a AuthStorageProvider'
		);
	}

	return authStorage;
};

export default useAuthStorage;
