import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthPanel from '../../shared/components/AuthPanel';

import { getTokenPayload } from '../../core/utils/session.util';

function Login() {
	const navigate = useNavigate();

	const onFinishLogin = () => {
		navigate('/home');
	};

	const onFinishSignup = () => {
		navigate('/home');
	};

	useEffect(() => {
		const tokenPayload = getTokenPayload();
		if (tokenPayload) navigate('/home');
	}, []);

	return (
		<div className="h-screen relative">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div className="shadow-lg">
					<AuthPanel
						onFinishLogin={onFinishLogin}
						onFinishSignup={onFinishSignup}
					/>
				</div>
			</div>
		</div>
	);
}

export default Login;
