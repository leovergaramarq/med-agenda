import { useNavigate, Link } from 'react-router-dom';

import Button from './Button';

import { removeTokenPayload } from '../../core/utils/session.util';

function Navbar({ children }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		removeTokenPayload();
		navigate('/');
	};

	return (
		<>
			<nav className="flex justify-between items-center gap-8 px-8 py-6 fixed w-full z-10 bg-white shadow">
				<a
					href="."
					className="cursor-pointer text-blue-primary font-semibold text-2xl ml-8"
				>
					MedAgenda
				</a>
				<ul className="flex gap-8 lg:gap-6 md:gap-4 sm:gap-2 items-center">
					<li className="text-center cursor-pointer text-blue-primary font-medium hover:underline">
						<Link to="/booking">BOOK</Link>
					</li>
					<li className="text-center cursor-pointer text-blue-primary font-medium hover:underline">
						<Link to="/history">HISTORY</Link>
					</li>
					<li className="text-center cursor-pointer text-blue-primary font-medium hover:underline">
						<Link to="/notifications">NOTIFICATIONS</Link>
					</li>
					<li className="">
						<Button className="rounded-full" onClick={handleLogout}>
							LOGOUT
						</Button>
					</li>
				</ul>
			</nav>
			{children}
		</>
	);
}

export default Navbar;
