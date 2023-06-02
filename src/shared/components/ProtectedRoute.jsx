import { Navigate } from 'react-router-dom';

import LayoutUser from './LayoutUser';

import { getTokenPayload } from '../../core/utils/session.util';

function ProtectedRoute({ children }) {
	if (!getTokenPayload()) return <Navigate to="/" />;
	return <LayoutUser>{children}</LayoutUser>;
}

export default ProtectedRoute;
