export function getValue(key) {
	return JSON.parse(localStorage.getItem(key));
}

export function setValue(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function removeValue(key) {
	localStorage.removeItem(key);
}

export function clear() {
	localStorage.clear();
}
