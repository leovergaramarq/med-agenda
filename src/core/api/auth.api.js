import User from '../../shared/models/User.model';
import ApiResponse from '../../shared/models/ApiResponse.model';

import { USERS_KEY } from '../constants/localStorage.constant';
import * as localStorageUtil from '../utils/localStorage.util';
import TokenPayload from '../../shared/models/TokenPayload.model';

export async function login({ username, password }) {
	const users = localStorageUtil.getValue(USERS_KEY);
	if (!users) return new ApiResponse(404, 'User not found');

	const user = users.find((user) => user.username === username);
	if (!user) return new ApiResponse(404, 'User not found');
	if (user.password !== password)
		return new ApiResponse(401, 'Wrong password');

	return new ApiResponse(200, new TokenPayload(user.id));
}

export async function signup({
	username,
	password,
	firstName,
	lastName,
	email,
	phoneNumber,
	phoneCode
}) {
	let users = localStorageUtil.getValue(USERS_KEY);
	if (users && users.find((user) => user.username === username)) {
		return new ApiResponse(409, {
			message: 'Username already exists'
		});
	}

	const newUser = new User(
		username,
		password,
		firstName,
		lastName,
		email,
		phoneNumber,
		phoneCode
	);
	if (users) users.push(newUser);
	else users = [newUser];
	localStorageUtil.setValue(USERS_KEY, users);

	return new ApiResponse(200, new TokenPayload(newUser.id));
}
