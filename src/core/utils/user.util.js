import * as localStorageUtil from './localStorage.util';
import { USERS_KEY } from '../constants/localStorage.constant';
import ApiResponse from '../../shared/models/ApiResponse.model';

export function getNextId(users) {
	if (!users) {
		users = localStorageUtil.getValue(USERS_KEY);
		if (!users) return new ApiResponse(404, 'Users not found');
	}
	return Math.max(...users.map((user) => user.id)) + 1;
}
