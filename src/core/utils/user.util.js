import * as localStorageUtil from './localStorage.util';
import { USERS_KEY } from '../constants/localStorage.constant';
import ApiResponse from '../../shared/models/ApiResponse.model';

export function getNextId() {
	const users = localStorageUtil.getValue(USERS_KEY) || [];
	if (!users.length) return 1;
	return Math.max(...users.map((user) => user.id)) + 1;
}
