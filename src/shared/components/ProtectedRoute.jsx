import { Navigate } from 'react-router-dom';
import { getTokenPayload } from '../../core/utils/session.util';

function ProtectedRoute({ children }) {
	if (!getTokenPayload()) return <Navigate to="/" />;
	return children;
}

export default ProtectedRoute;
