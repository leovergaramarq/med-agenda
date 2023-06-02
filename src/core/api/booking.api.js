import moment from 'moment';
import ApiResponse from '../../shared/models/ApiResponse.model';
import Booking from '../../shared/models/Booking.model';

import { BOOKINGS_KEY } from '../constants/localStorage.constant';
import * as localStorageUtil from '../utils/localStorage.util';

export async function getBookings() {
	const bookings = localStorageUtil.getValue(BOOKINGS_KEY) || [];
	return new ApiResponse(200, bookings);
}

export async function getBookingsFromUser({ idUser }) {
	const bookings = localStorageUtil.getValue(BOOKINGS_KEY) || [];
	return new ApiResponse(
		200,
		bookings.filter(({ idUser: id }) => id === idUser)
	);
}

export async function createBooking({ idUser, date, idType }) {
	console.log(moment(date).isBefore(moment(), 'D'), date);
	if (moment(date).isBefore(moment(), 'D')) {
		return new ApiResponse(400, {
			message:
				'You can only book with one or more days of anticipation. The date must be later than today'
		});
	}
	const bookings = localStorageUtil.getValue(BOOKINGS_KEY) || [];
	const booking = new Booking(idType, date, idUser);
	bookings.push(booking);
	localStorageUtil.setValue(BOOKINGS_KEY, bookings);

	return new ApiResponse(201, {
		id: booking.id
	});
}

export async function updateBooking(id, rate) {
	const bookings = localStorageUtil.getValue(BOOKINGS_KEY) || [];
	console.log(bookings, id);
	const booking = bookings.find(({ id: idBooking }) => idBooking == id);
	console.log(booking);
	if (!booking) {
		return new ApiResponse(404, {
			message: 'Booking not found'
		});
	}
	booking.rate = rate;
	localStorageUtil.setValue(BOOKINGS_KEY, bookings);

	return new ApiResponse(200);
}
