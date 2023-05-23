import { useState, useEffect, useMemo } from 'react';

import { getBookingsFromUser } from '../core/api/booking.api';
import { getTokenPayload } from '../core/utils/session.util';

function NotificationSummary() {
	const [bookings, setBookings] = useState(null);
	const [prevBookings, nextBooking] = useMemo(() => {
		if (!bookings) return [[], []];
		return splitBookings(bookings);
	}, [bookings]);

	useEffect(() => {
		if (!bookings) {
			const { id } = getTokenPayload();
			getBookingsFromUser({ idUser: id })
				.then((res) => {
					const { status, data } = res;
					if (status === 200) {
						setBookings(data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return <div className="flex flex-col gap-4 px-3 py-2 w-40 max-h-96"></div>;
}

export default NotificationSummary;
