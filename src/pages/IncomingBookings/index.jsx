import { useState, useEffect } from 'react';

import Appointments from './../Booking/components/Appointments';
import ConsultationTypeList from './../Booking/components/ConsultationTypeList';
import Calendar from './../Booking/components/Calendar';
import useLoader from '../../hooks/useLoader';

import { getBookingsFromUser } from '../../core/api/booking.api';
import { getTokenPayload } from '../../core/utils/session.util';
import SelectBooking from './../Booking/components/SelectBooking';

function IncomingBookings() {
	const [appointments, setAppointments] = useState(null);
	const { loading, setLoading, loader } = useLoader();

	useEffect(() => {
		if (!appointments) {
			const { id } = getTokenPayload();
			setTimeout(() => {
				getBookingsFromUser({ idUser: id })
					.then((res) => {
						const { status, data } = res;
						if (status === 200) {
							setAppointments(
								data
									? data.filter(({ pending }) => pending)
									: []
							);
						}
					})
					.catch((err) => {
						throw err;
					})
					.finally(() => {
						setLoading(false);
					});
			}, 1000);
		}
	}, []);

	return (
		<div className="grow flex justify-center gap-10 px-14 pt-6 pb-4">
			{!loading ? (
				<>
					<h1 className="text-3xl text-center">Incoming Bookings</h1>
					<Appointments appointments={appointments} />
				</>
			) : (
				loader()
			)}
		</div>
	);
}

export default IncomingBookings;
