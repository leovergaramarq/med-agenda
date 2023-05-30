function AppointmentCard({ info }) {
	console.log(info);
	return (
		<div className="w-4/5 rounded h-20 gap-4 flex flex-row items-center justify-center bg-green-300 hover:scale-110 transform transition-all duration-500">
			<div>{info.date}</div>
			<div>{info.name}</div>
		</div>
	);
}

function Appointments({ appointments }) {
	return (
		<div className="flex flex-col w-1/2 h-1/2 rounded shadow-xl border-8 bg-neutral-50">
			{appointments.length === 0 ? (
				<div>No appointments</div>
			) : (
				<>
					<h2 className="pl-5 pt-5 text-2xl mb-4">
						Scheduled medical appointments
					</h2>
					<div className="h-full flex flex-col gap-4 items-center overflow-y-auto">
						{appointments.map((appointment) => (
							<AppointmentCard
								key={appointment.id}
								info={appointment}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Appointments;
