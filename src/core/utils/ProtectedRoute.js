import { Navigate } from 'react-router-dom';
import useAuthStorage from '../hooks/useAuthStorage';

const ProtectedRoute = ({ children }) => {
	const { token } = useAuthStorage();

	return children;
};

export default ProtectedRoute;
