import { useState } from 'react';
import Swal from 'sweetalert2';

import { createBooking } from '../../../core/api/booking.api';

import { getTokenPayload } from '../../../core/utils/session.util';

function CalendarDayBlock({ appointments, setAppointments, date }) {
	const numeric_date = date.toLocaleString('en-us', { day: 'numeric' });
	const date_formated = date.toLocaleString('en-us', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const date_parsed = date
		.toLocaleString('en-us', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		})
		.replaceAll('/', '-');

	const [occupied, setOccupied] = useState(
		appointments.find(({ date }) => date === date_parsed) ? true : false
	);

	const style = occupied
		? 'bg-gray-300 cursor-not-allowed'
		: 'bg-white border-b-4 border-green-500';

	const handleClick = () => {
		if (occupied)
			return Swal('Error', 'This day is already booked', 'error');
		Swal.fire({
			title: 'Are you sure?',
			text: 'You are going to book this day for your appointment.',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, book it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Booked!',
					`Your appointment was booked for ${date_formated}.`,
					'success'
				);
				const { id: idUser } = getTokenPayload();
				const name = 'Appointment';
				const { data, status } = await createBooking({
					idUser,
					date: date_parsed,
					name
				});
				if (status === 201) {
					const { id } = data;
					setAppointments([
						...appointments,
						{
							id,
							idUser,
							date: date_parsed,
							name,
							pending: true
						}
					]);
					setOccupied(true);
				} else if (status === 400) {
					Swal.fire(
						'Error',
						'Cannot book a date in the past',
						'error'
					);
				} else {
					Swal.fire('Error', 'Something went wrong', 'error');
					console.log('Error', data);
				}
			}
		});
	};

	return (
		<>
			<button
				type="submit"
				className={'w-24 h-24 text-xl rounded ' + style}
				onClick={() => handleClick()}
				disabled={occupied}
			>
				{numeric_date}
			</button>
		</>
	);
}

export default CalendarDayBlock;
