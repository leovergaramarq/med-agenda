function Footer() {
	return (
		<div className="mt-32 py-10 bg-blue-tertiary flex justify-around">
			<div className="flex flex-col gap-4">
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					What is MedAgenda?
				</div>
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					How does it work?
				</div>
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					Why use MedAgenda?
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					Social Media
				</div>
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					Terms and Conditions
				</div>
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					Privacy Policy
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					Contact Us
				</div>
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					About Us
				</div>
				<div className="text-white font-semibold text-sm hover:underline cursor-pointer">
					FAQ
				</div>
			</div>
		</div>
	);
}

export default Footer;
