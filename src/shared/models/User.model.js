import * as localStorageUtil from './../../core/utils/localStorage.util';
import { USERS_KEY } from '../../core/constants/localStorage.constant';

class User {
	constructor(
		username,
		password,
		firstName,
		lastName,
		email,
		phoneNumber,
		phoneCode
	) {
		this.id = User.#getNextId();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.phoneCode = phoneCode;
	}

	static #getNextId() {
		const users = localStorageUtil.getValue(USERS_KEY) || [];
		if (!users.length) return 1;
		return Math.max(...users.map(({ id }) => id)) + 1;
	}
}

export default User;
