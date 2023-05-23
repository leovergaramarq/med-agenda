import Navbar from '../../shared/components/Navbar';

function Home() {
	return (
		<>
			<Navbar />
			<div className="pt-20">
				<div className="bg-landing-hero h-screen relative bg-cover bg-no-repeat"></div>
			</div>
		</>
	);
}

export default Home;
