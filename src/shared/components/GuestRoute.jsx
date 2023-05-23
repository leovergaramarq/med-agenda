import { Navigate } from 'react-router-dom';
import { getTokenPayload } from '../../core/utils/session.util';

function GuestRoute({ children }) {
	if (getTokenPayload()) return <Navigate to="/home" />;
	return children;
}

export default GuestRoute;
