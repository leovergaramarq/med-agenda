import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button';

import { login } from '../../../core/api/auth.api';

import { setTokenPayload } from '../../../core/utils/session.util';

function LoginForm({ onFinish }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors
	} = useForm();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleFormChange = () => {
		if (error) setError(null);
	};

	const onSubmit = (data) => {
		console.log(data);
		setLoading(true);
		login(data)
			.then((res) => {
				console.log(res);
				const { status, data } = res;
				if (status === 200) {
					setTokenPayload(data);
					if (typeof onFinish === 'function') onFinish(data);
				} else if (status === 404) {
					setError('Usuario no encontrado');
				} else if (status === 401) {
					setError('Contraseña incorrecta');
				} else {
					setError('Error inesperado');
				}
			})
			.catch((err) => {
				console.log(err);
				setError('Error del servidor');
			})
			.finally(() => setLoading(false));
	};

	return (
		<form
			className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-white h-full"
			onChange={handleFormChange}
		>
			{error ? (
				<div className="border border-red-800 bg-red-100 text-red-800 text-sm rounded-sm text-center w-full px-1 py-2">
					{error}
				</div>
			) : null}
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-4 w-full relative">
					<input
						type="text"
						name="username"
						id="username"
						className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
						placeholder="Username"
						{...register('username', {
							required: true,
							// minLength: 2,
							// maxLength: 20,
							pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/i,
							onChange: () => {
								if (errors.username) {
									clearErrors('username');
								}
							}
						})}
					/>
					{errors.username && (
						<span className="text-xs text-red-500 absolute bottom-0 transform translate-y-full">
							Invalid username
						</span>
					)}
				</div>
				<div className="flex flex-col gap-4 w-full relative">
					<input
						type="password"
						name="password"
						id="password"
						className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
						placeholder="Password"
						{...register('password', {
							required: true
							// minLength: 5,
							// maxLength: 50
						})}
					/>
					{errors.password && (
						<span className="text-xs text-red-500 absolute bottom-0 transform translate-y-full">
							Contraseña no válida
						</span>
					)}
				</div>
			</div>
			<Button
				className="bg-green-primary mt-2 text-lg py-2"
				onClick={() => {
					if (error) {
						setError(null);
					}
					handleSubmit(onSubmit)();
				}}
				disabled={loading}
			>
				Login
			</Button>
		</form>
	);
}

export default LoginForm;
