import { getNextId } from '../../core/utils/user.util';

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
		this.id = getNextId();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.phoneCode = phoneCode;
	}
}

export default User;
