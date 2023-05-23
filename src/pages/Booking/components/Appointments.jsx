function AppointmentCard({ info }) {
	return (
		<div>
			<div>{info.name}</div>
			<div>{info.date}</div>
		</div>
	);
}

function Appointments({ appointments }) {
	return (
		<div className="flex flex-col w-1/2 h-1/2 rounded border">
			{appointments.length === 0 ? (
				<div>No appointments</div>
			) : (
				appointments.map(({ date }, i) => (
					<div key={i} className="flex flex-row">
						{date.toString()}
					</div>
				))
			)}
		</div>
	);
}

export default Appointments;
