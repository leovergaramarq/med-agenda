import { useEffect, useState } from 'react';

import { getBookingsOneDayBefore } from '../../core/api/notifications.api';
import { getTokenPayload } from '../../core/utils/session.util';
import useLoader from '../../hooks/useLoader';
import Navbar from '../../shared/components/Navbar';
import Menu from './components/Menu';

function Notifications() {
	const [notifications, setNotifications] = useState([]);
	const { loading, setLoading, loader } = useLoader();

	useEffect(() => {
		const { id } = getTokenPayload();
		setTimeout(() => {
			getBookingsOneDayBefore({ idUser: id })
				.then((res) => {
					const { status, data } = res;
					if (status === 200) {
						setNotifications(data ? data : []);
					}
				})
				.catch((err) => {
					throw err;
				})
				.finally(() => {
					setLoading(false);
				});
		}, 1000);
	}, []);

	return (
		<>
			<Navbar/>
				<div className="flex justify-center items-center h-screen w-full">
					{!loading ? (
						<Menu notifications={notifications}></Menu>
					) : (
						loader()
					)}
				</div>
		</>
	);
}

export default Notifications;
