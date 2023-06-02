import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Modal from './Modal';
import AuthPanel from './AuthPanel';

function NavbarGuest() {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const onFinishLogin = () => {
		setIsModalOpen(false);
		setModalContent(null);
		navigate('/home');
	};

	const onFinishSignup = () => {
		setIsModalOpen(false);
		setModalContent(null);
		navigate('/home');
	};

	const handleLogin = () => {
		// return navigate('/login');
		setModalContent(
			<div className="px-8 py-6">
				<AuthPanel
					onFinishLogin={onFinishLogin}
					onFinishSignup={onFinishSignup}
				/>
			</div>
		);
		setIsModalOpen(true);
	};

	return (
		<>
			<Modal
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				styles={{
					content: { width: 'fit-content', height: 'fit-content' }
				}}
			>
				{modalContent}
			</Modal>
			<nav className="flex justify-between items-center gap-8 px-8 py-6 fixed w-full z-10 bg-white">
				<a
					href="."
					className="text-center cursor-pointer text-blue-primary font-semibold text-2xl ml-8"
				>
					MedAgenda
				</a>
				<ul className="flex gap-8 lg:gap-6 md:gap-4 sm:gap-2 items-center">
					<li className="text-center cursor-pointer text-blue-primary font-medium hover:underline">
						HOME
					</li>
					<li className="text-center cursor-pointer text-blue-primary font-medium hover:underline">
						ABOUT
					</li>
					<li className="">
						<Button className="rounded-full" onClick={handleLogin}>
							LOGIN
						</Button>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavbarGuest;
