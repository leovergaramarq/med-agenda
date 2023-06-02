import * as localStorageUtil from './../../core/utils/localStorage.util';
import { BOOKINGS_KEY } from '../../core/constants/localStorage.constant';

class Booking {
	constructor(idType, date, idUser) {
		this.id = Booking.#getNextId();
		this.pending = new Date() < new Date(date);
		this.idType = idType;
		this.date = date;
		this.idUser = idUser;
	}

	static #getNextId() {
		const bookings = localStorageUtil.getValue(BOOKINGS_KEY) || [];
		if (!bookings.length) return 1;
		return Math.max(...bookings.map(({ id }) => id)) + 1;
	}
}

export default Booking;
