import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button';

import { signup } from '../../../core/api/auth.api';

import { setTokenPayload } from '../../../core/utils/session.util';

function SignupForm({ onFinish }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		watch
	} = useForm();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleFormChange = () => {
		if (error) setError(null);
	};

	const onSubmit = (data) => {
		console.log(data);
		setLoading(true);
		signup(data)
			.then((res) => {
				const { status, data } = res;
				if (status === 200) {
					setTokenPayload(data);
					if (typeof onFinish === 'function') onFinish(data);
				} else if (status === 409) {
					setError('Nombre de usuario no disponible');
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
			className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white h-full"
			onChange={handleFormChange}
		>
			{error ? (
				<div className="border border-red-800 bg-red-100 text-red-800 text-sm rounded-sm text-center w-full px-1 py-2">
					{error}
				</div>
			) : null}
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1 w-full relative">
					<label htmlFor="username">
						<span className="text-gray-500">Nombre de usuario</span>
					</label>
					<input
						type="text"
						name="username"
						id="username"
						className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent w-full"
						{...register('username', {
							required: true,
							minLength: 2,
							maxLength: 20,
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
							Nombre de usuario no válido
						</span>
					)}
				</div>
				<div className="flex gap-2 w-full">
					<div className="flex flex-col gap-1 relative grow">
						<label htmlFor="password">
							<span className="text-gray-500">Contraseña</span>
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
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
					<div className="flex flex-col gap-1 relative grow">
						<label htmlFor="confirmPassword">
							<span className="text-gray-500">
								Confirmar contraseña
							</span>
						</label>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
							{...register('confirmPassword', {
								required: true,
								validate: (value) => value === watch('password')
							})}
						/>
						{errors.confirmPassword && (
							<span className="text-xs text-red-500 absolute bottom-0 transform translate-y-full">
								Contraseña no válida
							</span>
						)}
					</div>
				</div>
				<div className="flex gap-2 w-full">
					<div className="flex flex-col gap-1 relative">
						<label htmlFor="phoneNumber">
							<span className="text-gray-500">Teléfono</span>
						</label>
						<div id="phoneNumber" className="flex gap-1 grow">
							<select
								{...register('phoneCode', {
									required: true
								})}
								className="outline-none border border-gray-300 rounded-md "
							>
								<option value="57">+57</option>
							</select>
							<input
								type="text"
								name="phoneNumber"
								className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent max-w-[120px]"
								{...register('phoneNumber', {
									required: true,
									minLength: 10,
									maxLength: 10,
									pattern: /^[0-9]{10}$/i
								})}
							/>
						</div>
						{errors.phoneNumber && (
							<span className="text-xs text-red-500 absolute bottom-0 transform translate-y-full">
								Teléfono no válido
							</span>
						)}
					</div>
					<div className="flex flex-col gap-1 relative grow">
						<label htmlFor="email">
							<span className="text-gray-500">
								Correo electrónico
							</span>
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent"
							{...register('email', {
								required: true,
								pattern:
									/^[a-z][a-z0-9._]*@[a-z0-9.-]+\.[a-z]{2,4}$/i
							})}
						/>
						{errors.email && (
							<span className="text-xs text-red-500 absolute bottom-0 transform translate-y-full">
								Correo no válido
							</span>
						)}
					</div>
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
				Registrarse
			</Button>
		</form>
	);
}

export default SignupForm;
