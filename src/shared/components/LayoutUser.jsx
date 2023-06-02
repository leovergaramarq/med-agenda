import Navbar from './Navbar';

function LayoutUser({ children }) {
	return (
		<>
			<Navbar />
			<div className="pt-24">{children}</div>
		</>
	);
}

export default LayoutUser;
