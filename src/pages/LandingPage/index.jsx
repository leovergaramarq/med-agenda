import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/components/Button';
import Footer from '../../shared/components/Footer';
import NavbarGuest from '../../shared/components/NavbarGuest';

function LandingPage() {
	const navigate = useNavigate();

	const handleStart = () => {
		navigate('/login');
	};

	return (
		<>
			<NavbarGuest />
			<div className="pt-20">
				<div className="bg-landing-hero h-screen relative bg-cover bg-no-repeat">
					<div className="absolute right-10 top-20 w-1/3">
						<div className="flex flex-col gap-4 px-10 py-8 rounded-3xl bg-white">
							<div className="text-blue-primary font-semibold text-4xl">
								Book your medical consultation now!
							</div>
							<div className="text-blue-primary">
								Say goodbye to long waiting times and phone
								calls. Our intuitive online platform allows you
								to effortlessly book medical appointments at
								your preferred date, time, and location.
							</div>
							<Button
								className="bg-green-primary mt-2 rounded-full w-min"
								onClick={handleStart}
							>
								GET STARTED
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default LandingPage;
