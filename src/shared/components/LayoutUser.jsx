import Navbar from './Navbar';

function LayoutUser({ children }) {
	return (
		<>
			<Navbar />
			<div className="pt-24 h-screen flex flex-col">{children}</div>
		</>
	);
}

export default LayoutUser;
