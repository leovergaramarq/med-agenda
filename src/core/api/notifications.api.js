import ApiResponse from '../../shared/models/ApiResponse.model';

import { getBookingsFromUser } from '../../core/api/booking.api';

export async function getBookingsOneDayBefore({ idUser }) {
	const bookings_from_user = (await getBookingsFromUser({ idUser })) || [];
	const bookings_one_day_before = bookings_from_user.data.filter(
		({ date }) => {
			const currentDate = new Date();
			const previousDate = new Date(date);
			previousDate.setDate(previousDate.getDate() - 1);
			return previousDate.toDateString() === currentDate.toDateString();
		}
	);
	return new ApiResponse(200, bookings_one_day_before);
}
