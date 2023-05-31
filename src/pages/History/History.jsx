import { useState, useEffect } from 'react';

import AppointmentCard from '../../shared/components/AppointmentCard';

import useLoader from '../../hooks/useLoader';
import { getBookingsFromUser } from '../../core/api/booking.api';
import { getTokenPayload } from '../../core/utils/session.util';
import Navbar from '../../shared/components/Navbar';
import moment from 'moment';
import Modal from '../../shared/components/Modal';
import StarRating from '../../shared/components/StarRating/StarRating';

function History() {
	const [appointments, setAppointments] = useState(null);
	const [actualAppointment, setActualAppointment] = useState(null);
	const { loading, setLoading, loader } = useLoader();
	const [modal, setModal] = useState(false);
	const [onRate, setOnRate] = useState(false);

	const openRateModal = (appointment) => {
		setActualAppointment(appointment);
		setModal(true);
	};

	useEffect(() => {
		const { id } = getTokenPayload();
		setTimeout(() => {
			getBookingsFromUser({ idUser: id })
				.then((res) => {
					const { status, data } = res;
					if (status === 200) {
						setAppointments(data ? data : []);
					}
				})
				.catch((err) => {
					throw err;
				})
				.finally(() => {
					setLoading(false);
					setOnRate(false);
				});
		}, 500);
	}, [onRate]);

	return (
		<>
			<Navbar>
				<div className="pt-24 flex justify-center align-middle w-full h-full">
					{loading ? (
						loader()
					) : (
						<div className="flex flex-col w-full h-screen rounded shadow-xl border-8 bg-neutral-50">
							<h1>History</h1>
							{appointments.length === 0 ? (
								<div>No appointments</div>
							) : (
								<>
									<h2 className="pl-5 pt-5 text-2xl mb-4">
										Scheduled medical appointments
									</h2>
									<div className="h-full flex flex-col gap-4 items-center overflow-y-auto">
										{appointments.map((appointment) => (
											<AppointmentCard
												key={appointment.id}
												info={appointment}
												status={
													appointment?.rate
														? 'rated'
														: moment(
																appointment.date
														  ).isBefore(moment())
														? 'rateable'
														: 'none'
												}
												rate={appointment?.rate?.rating}
												openRateModal={() =>
													openRateModal(appointment)
												}
											/>
										))}
									</div>
								</>
							)}
						</div>
					)}
					<Modal isOpen={modal} setIsOpen={setModal}>
						<h1>How was your appointment?</h1>
						<StarRating
							appointment={actualAppointment}
							setOpenModal={setModal}
							setOnRate={setOnRate}
						/>
					</Modal>
				</div>
			</Navbar>
		</>
	);
}

export default History;
