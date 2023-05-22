import Button from './Button';

function NavbarGuest() {
	return (
		<nav className="flex justify-between items-center px-8 py-6">
			<a
				href="."
				className="cursor-pointer text-blue-primary font-semibold text-2xl ml-8"
			>
				MedAgenda
			</a>
			<ul className="flex gap-8 items-center">
				<li className="cursor-pointer text-blue-primary font-medium hover:underline">
					HOME
				</li>
				<li className="cursor-pointer text-blue-primary font-medium hover:underline">
					SOBRE NOSOTROS
				</li>
				<li className="">
					<Button className="rounded-full">INICIAR SESIÓN</Button>
				</li>
			</ul>
		</nav>
	);
}

export default NavbarGuest;
