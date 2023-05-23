import { useState, useEffect } from 'react';

import Calendar from '../shared/components/Calendar';
import Appointments from '../shared/components/Appointments';

import { getBookingsFromUser } from '../core/api/booking.api';
import { getTokenPayload } from '../core/utils/session.util';

function Booking() {
	const [appointments, setAppointments] = useState(null);

	useEffect(() => {
		if (!appointments) {
			const { id } = getTokenPayload();
			getBookingsFromUser({ idUser: id })
				.then((res) => {
					const { status, data } = res;
					if (status === 200) {
						setAppointments(data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return (
		<div className="flex flex-row h-screen justify-center items-center gap-10 px-10">
			{appointments ? (
				<>
					<Appointments schedule={appointments} />
					<Calendar
						schedule={appointments}
						setAppointment={setAppointments}
					/>
				</>
			) : (
				<div>Loading... </div>
			)}
		</div>
	);
}

export default Booking;
