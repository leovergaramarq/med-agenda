import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { createBooking } from '../../../core/api/booking.api';

import { getTokenPayload } from '../../../core/utils/session.util';
import { DATE_FORMAT } from '../../../core/constants/date.constant';

function CalendarDayBlock({
	appointments,
	setAppointments,
	current_date,
	month_date,
	selectedDate,
	setSelectedDate
}) {
	const current_date_parsed = current_date.format(DATE_FORMAT);

	const getBookedAppointment = () => {
		return appointments.find(({ date }) => date === current_date_parsed);
	};

	const [bookedAppointment, setBookedAppointment] = useState(
		getBookedAppointment()
	);

	useEffect(() => {
		setBookedAppointment(getBookedAppointment());
	}, [month_date, appointments]);

	const numeric_current_date = current_date.format('D');

	const handleSelect = () => {
		if (bookedAppointment) {
			return Swal('Error', 'This day is already booked', 'error');
		}
		if (current_date_parsed < new Date().toISOString().split('T')[0]) {
			return Swal(
				'Error',
				'You can only book with one or more days of anticipation. The date must be later than today',
				'error'
			);
		}
		if (selectedDate !== current_date_parsed) {
			setSelectedDate(current_date_parsed);
		} else {
			setSelectedDate(null);
		}
	};

	return (
		<>
			<button
				type="submit"
				// className={`
				// w-24 h-24 text-xl rounded ${
				// 	bookedAppointment
				// 		? 'bg-gray-300 cursor-not-allowed'
				// 		: 'bg-white border-b-4 border-blue-primary text-white hover:scale-110 transform transition-all duration-500'
				// }`}
				className={`
				w-24 h-24 text-xl rounded ${
					bookedAppointment
						? bookedAppointment.pending
							? 'bg-blue-primary text-white cursor-not-allowed'
							: 'bg-gray-300 cursor-not-allowed'
						: selectedDate === current_date_parsed
						? 'bg-green-400 text-white hover:scale-110 transform transition-all duration-500'
						: 'bg-white border-b-4 hover:scale-110 transform transition-all duration-100'
				}`}
				onClick={handleSelect}
				disabled={bookedAppointment}
				title={current_date_parsed}
			>
				{numeric_current_date}
			</button>
		</>
	);
}

export default CalendarDayBlock;
