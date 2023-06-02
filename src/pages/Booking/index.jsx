import { useState, useEffect } from 'react';

import Appointments from './components/Appointments';
import Calendar from './components/Calendar';
import useLoader from '../../hooks/useLoader';

import { getBookingsFromUser } from '../../core/api/booking.api';
import { getTokenPayload } from '../../core/utils/session.util';

function Booking() {
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
							setAppointments(data ? data : []);
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
		<div className="h-screen flex justify-center items-center gap-10 px-14 pt-6">
			{!loading ? (
				<>
					<Appointments appointments={appointments} />
					<Calendar
						appointments={appointments}
						setAppointments={setAppointments}
					/>
				</>
			) : (
				loader()
			)}
		</div>
	);
}

export default Booking;
