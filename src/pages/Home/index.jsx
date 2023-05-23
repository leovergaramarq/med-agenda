import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/components/Button';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';

import { getTokenPayload } from '../../core/utils/session.util';

function Home() {
	const navigate = useNavigate();

	const handleStart = () => {
		navigate('/login');
	};

	useEffect(() => {
		const tokenPayload = getTokenPayload();
		if (!tokenPayload) navigate('/');
	}, []);

	return (
		<>
			<Navbar />
			<div className="pt-20">
				<div className="bg-landing-hero h-screen relative bg-cover bg-no-repeat">
					{/* <div className="absolute right-10 top-20 w-1/3">
						<div className="flex flex-col gap-4 px-10 py-8 rounded-3xl bg-white">
							<div className="text-blue-primary font-semibold text-4xl">
								Agenda tus consultas médicas
							</div>
							<div className="text-blue-primary">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores minus expedita
								eveniet recusandae ad, totam hic quisquam
								facilis, quae architecto cum mollitia sint
								corporis voluptate dolorum explicabo tempora
								quidem maiores?
							</div>
							<Button
								className="bg-green-primary mt-2 rounded-full w-min"
								onClick={handleStart}
							>
								EMPEZAR
							</Button>
						</div>
					</div> */}
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Home;
