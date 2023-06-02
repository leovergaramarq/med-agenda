import { useState, useEffect } from 'react';
import moment from 'moment';

import AppointmentCard from '../../shared/components/AppointmentCard';

import useLoader from '../../hooks/useLoader';
import { getBookingsFromUser } from '../../core/api/booking.api';
import { getTokenPayload } from '../../core/utils/session.util';
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

	const styleModal = {
		content: {
			// outerHeight: '50px',
			width: 'min-content',
			height: 'min-content'
		}
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
		<div className="flex justify-center align-middle w-full h-full">
			{loading ? (
				loader()
			) : (
				<div className="flex flex-col w-screen h-screen rounded shadow-xl border-8 bg-neutral-50">
					<h1 className="self-center">History</h1>
					{appointments.length === 0 ? (
						<div>No appointments</div>
					) : (
						<>
							<h2 className="self-center pl-5 pt-3 text-2xl mb-4">
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
			<Modal styles={styleModal} isOpen={modal} setIsOpen={setModal}>
				<div className="flex flex-col justify-center items-center px-20">
					<div className="flex flex-col gap-2 text-center w-80">
						<h1 className="text-4xl">How was your experience?</h1>
						<p className="text-base">
							Our dedicated team is committed to acting upon the
							feedback received promptly. We continuously evaluate
							and refine our processes to ensure that we meet and
							exceed our patients' expectations.
						</p>
					</div>
					<StarRating
						appointment={actualAppointment}
						setOpenModal={setModal}
						setOnRate={setOnRate}
					/>
				</div>
			</Modal>
		</div>
	);
}

export default History;
