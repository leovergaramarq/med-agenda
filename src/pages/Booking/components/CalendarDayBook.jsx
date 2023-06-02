import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { createBooking } from '../../../core/api/booking.api';

import { getTokenPayload } from '../../../core/utils/session.util';
import { DATE_FORMAT } from '../../../core/constants/date.constant';

function CalendarDayBlock({
	appointments,
	setAppointments,
	current_date,
	month_date
}) {

	const current_date_parsed = current_date.format(DATE_FORMAT)

	const [occupied, setOccupied] = useState(
		appointments.find(({ date }) => date === current_date_parsed)
			? true
			: false
	);

	useEffect(() => {
		setOccupied(
			appointments.find(({ date }) => date === current_date_parsed)
				? true
				: false
		);
	}, [month_date]);

	const numeric_current_date = current_date.format('D');

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
					`Your appointment was booked for ${current_date_parsed}.`,
					'success'
				);
				const { id: idUser } = getTokenPayload();
				const name = 'Appointment';
				const { data, status } = await createBooking({
					idUser,
					date: current_date_parsed,
					name
				});
				if (status === 201) {
					const { id } = data;
					setAppointments([
						...appointments,
						{
							id,
							idUser,
							date: current_date_parsed,
							name,
							pending: true
						}
					]);
					setOccupied(true);
				} else if (status === 400) {
					Swal.fire(
						'Error',
						'You can only book with one or more days of anticipation. The date must be later than today',
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
				className={
					'w-24 h-24 text-xl rounded ' +
					style +
					' hover:scale-110 transform transition-all duration-500'
				}
				onClick={() => handleClick()}
				disabled={occupied}
				title={current_date_parsed}
			>
				{numeric_current_date}
			</button>
		</>
	);
}

export default CalendarDayBlock;
