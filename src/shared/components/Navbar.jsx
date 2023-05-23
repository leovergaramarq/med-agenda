import { useNavigate } from 'react-router-dom';

import Button from './Button';
import { removeTokenPayload } from '../../core/utils/session.util';

function Navbar() {
	const navigate = useNavigate();

	const handleLogout = () => {
		removeTokenPayload();
		navigate('/');
	};

	return (
		<nav className="flex justify-between items-center px-8 py-6 fixed w-full z-10 bg-white">
			<a
				href="."
				className="cursor-pointer text-blue-primary font-semibold text-2xl ml-8"
			>
				MedAgenda
			</a>
			<ul className="flex gap-8 items-center">
				<li className="cursor-pointer text-blue-primary font-medium hover:underline">
					MIS CONSULTAS
				</li>
				<li className="cursor-pointer text-blue-primary font-medium hover:underline">
					HISTORIAL DE CONSULTAS
				</li>
				<li className="">
					<Button className="rounded-full" onClick={handleLogout}>
						CERRAR SESIÓN
					</Button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
