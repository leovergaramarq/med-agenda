import Navbar from '../../shared/components/Navbar';
import { getBookingsOneDayBefore } from '../../core/api/notifications.api';
import { getTokenPayload } from '../../core/utils/session.util';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function Home() {
	useEffect(() => {
		const { id } = getTokenPayload();
		setTimeout(() => {
			getBookingsOneDayBefore({ idUser: id })
				.then((res) => {
					const { status, data } = res;
					if (status === 200) {
						console.log(data);
						data.forEach((notification) => {
							toast.info(
								`You have an appointment tomorrow at ${notification.date}`,
								{
									position: 'top-right',
									autoClose: 5000,
									/* hideProgressBar: false, */
									closeOnClick: true,
									pauseOnHover: true
								}
							);
						});
					}
				})
				.catch((err) => {
					throw err;
				});
		}, 1000);
	}, []);

	return (
		<>
			<ToastContainer />
			<div className="bg-landing-hero h-screen relative bg-cover bg-no-repeat"></div>
		</>
	);
}

export default Home;
