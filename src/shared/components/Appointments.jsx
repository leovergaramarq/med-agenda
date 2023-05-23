function AppointmentCard({ info }) {
	return (
		<div>
			<div>{info.name}</div>
			<div>{info.date}</div>
		</div>
	);
}

function Appointments({ schedule }) {
	return (
		<div className="flex flex-col w-1/2 h-1/2 rounded border">
			{Object.keys(schedule).length === 0 ? (
				<div>No appointments</div>
			) : (
				Object.keys(schedule).map((date) => (
					<div key={date} className="flex flex-row">
						{date.toString()}
					</div>
				))
			)}
		</div>
	);
}

export default Appointments;
