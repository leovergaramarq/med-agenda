function AppointmentCard({ info, status = 'none', openRateModal, rate }) {
	console.log(status);
	return (
		<div className="w-4/5 rounded h-20 gap-4 flex flex-row items-center justify-center bg-green-300 hover:scale-110 transform transition-all duration-500">
			<div>{info.date}</div>
			<div>{info.name}</div>
			{status == 'rateable' && (
				<button onClick={openRateModal}>Rate</button>
			)}
			{status == 'rated' && (
				<>
					{[...Array(5)].map((star, index) => {
						index += 1;
						return (
							<button
								type="button"
								key={index}
								className={index <= rate ? 'on' : 'off'}
								focusable="false"
							>
								<span className="text-4xl star">&#9733;</span>
							</button>
						);
					})}
				</>
			)}
		</div>
	);
}

export default AppointmentCard;
