import { Navigate, Outlet } from 'react-router-dom';

import LayoutUser from './LayoutUser';

import { getTokenPayload } from '../../core/utils/session.util';

function ProtectedRoute() {
	if (!getTokenPayload()) return <Navigate to="/login" />;
	return (
		<LayoutUser>
			<Outlet />
		</LayoutUser>
	);
}

// function ProtectedRoute({ children }) {
// 	if (!getTokenPayload()) return <Navigate to="/" />;
// 	return <LayoutUser>{children}</LayoutUser>;
// }
export default ProtectedRoute;
