import { Navigate, Outlet } from 'react-router-dom';
import { getTokenPayload } from '../../core/utils/session.util';

function GuestRoute() {
	if (getTokenPayload()) return <Navigate to="/home" />;
	return <>
		<Outlet />
	</>;
}

export default GuestRoute;
