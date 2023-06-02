import ApiResponse from '../../shared/models/ApiResponse.model';

import { getBookingsFromUser } from '../../core/api/booking.api';
import moment from 'moment';
import { DATE_FORMAT } from '../constants/date.constant';

export async function getBookingsOneDayBefore({ idUser }) {
	const bookings_from_user = (await getBookingsFromUser({ idUser })) || [];
	const bookings_one_day_before = bookings_from_user.data.filter(
		({ date }) => {
			const currentDate = moment();
			const previousDate = moment(date);
			return previousDate.format(DATE_FORMAT) === currentDate.format(DATE_FORMAT) || previousDate.subtract(1, 'd').format(DATE_FORMAT) === currentDate.format(DATE_FORMAT);
		}
	);
	return new ApiResponse(200, bookings_one_day_before);
}
