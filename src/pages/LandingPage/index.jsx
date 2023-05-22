import Button from '../../shared/components/Button';
import Footer from '../../shared/components/Footer';
import NavbarGuest from '../../shared/components/NavbarGuest';

function LandingPage() {
	return (
		<div className="min-h-screen font-wix-madefor-display">
			<NavbarGuest />
			<div className="bg-landing-hero h-screen relative bg-cover bg-no-repeat">
				<div className="absolute right-10 top-20 w-1/3">
					<div className="flex flex-col gap-4 px-10 py-8 rounded-3xl bg-white">
						<div className="text-blue-primary font-semibold text-4xl">
							Agenda tus consultas médicas
						</div>
						<div className="text-blue-primary">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Asperiores minus expedita eveniet recusandae
							ad, totam hic quisquam facilis, quae architecto cum
							mollitia sint corporis voluptate dolorum explicabo
							tempora quidem maiores?
						</div>
						<Button className="bg-green-primary mt-2 rounded-full w-min">
							EMPEZAR
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default LandingPage;
