import ApiResponse from '../../shared/models/ApiResponse.model';

import { BOOKINGS_KEY } from '../constants/localStorage.constant';
import * as localStorageUtil from '../utils/localStorage.util';

export async function getBookings() {
	const bookings = localStorageUtil.getValue(BOOKINGS_KEY) || [];
	return new ApiResponse(200, bookings);
}

export async function getBookingsFromUser({ idUser }) {
	const bookingsUser = (await getBookings()).data.find(
		({ idUser: id }) => id === idUser
	);
	return new ApiResponse(200, bookingsUser?.data || {});
}

export async function bookDay({ date, idUser }) {
	const bookings = (await getBookings()).data;
	let bookingsUser = bookings.find(({ idUser: id }) => id === idUser);
	if (bookingsUser) {
		bookingsUser.data[date] = true;
	} else {
		bookingsUser = { idUser, data: { [date]: true } };
		bookings.push(bookingsUser);
	}
	localStorageUtil.setValue(BOOKINGS_KEY, bookings);
	return new ApiResponse(200, {
		message: 'Day booked successfully'
	});
}
