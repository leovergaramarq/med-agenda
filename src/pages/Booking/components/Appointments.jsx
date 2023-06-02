import AppointmentCard from '../../../shared/components/AppointmentCard';

function Appointments({ appointments }) {
	return (
		<div className="flex flex-col w-1/2 h-1/2 rounded shadow-xl border-8 bg-neutral-50">
			{appointments.length === 0 ? (
				<div>No appointments</div>
			) : (
				<>
					<h2 className="pl-5 pt-5 text-2xl mb-4">
						Upcoming scheduled medical appointments
					</h2>
					<div className="h-full flex flex-col gap-4 items-center overflow-y-auto">
						{appointments
							.filter((appointment) => {
								return new Date() < new Date(appointment.date);
							})
							.map((appointment) => (
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
