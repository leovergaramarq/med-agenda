import { useState } from 'react';
import Calendar from '../shared/components/Calendar';
import Appointments from '../shared/components/Appointments';

function Booking() {
	const [appointments, setAppointments] = useState(
		JSON.parse(localStorage.getItem('bookedDays')) || {}
	);

	return (
		<div class="flex flex-row h-screen justify-center items-center gap-10 px-10">
			<Appointments schedule={appointments} />
			<Calendar
				schedule={appointments}
				setAppointment={setAppointments}
			/>
		</div>
	);
}

export default Booking;
