import { Navigate, Outlet } from 'react-router-dom';
import { getTokenPayload } from '../../core/utils/session.util';

function ProtectedRoute() {
	if (!getTokenPayload()) return <Navigate to="/login" />;
	return <Outlet/>;
}

export default ProtectedRoute;
