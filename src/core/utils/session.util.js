import * as localStorageUtil from './localStorage.util';
import { TOKEN_PAYLOAD_KEY } from '../constants/localStorage.constant';

export function getTokenPayload() {
	return localStorageUtil.getValue(TOKEN_PAYLOAD_KEY);
}

export function setTokenPayload(tokenPayload) {
	localStorageUtil.setValue(TOKEN_PAYLOAD_KEY, tokenPayload);
}

export function removeTokenPayload() {
	localStorageUtil.removeValue(TOKEN_PAYLOAD_KEY);
}
