import { useState, useEffect } from 'react';

import Appointments from './components/Appointments';
import ConsultationTypeList from './components/ConsultationTypeList';
import Calendar from './components/Calendar';
import useLoader from '../../hooks/useLoader';

import { getBookingsFromUser } from '../../core/api/booking.api';
import { getTokenPayload } from '../../core/utils/session.util';
import SelectBooking from './components/SelectBooking';

function Booking() {
	const [appointments, setAppointments] = useState(null);
	const { loading, setLoading, loader } = useLoader();
	const [step, setStep] = useState(1);
	const [consultationTypeId, setConsultationTypeId] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);

	useEffect(() => {
		if (consultationTypeId) {
			if (step < 2) setStep(2);
		}
	}, [consultationTypeId]);

	useEffect(() => {
		if (selectedDate) {
			if (step < 3) setStep(3);
		}
	}, [selectedDate]);

	useEffect(() => {
		if (!appointments) {
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
					});
			}, 1000);
		}
	}, []);

	return (
		<div className="grow flex justify-center gap-10 px-14 pt-6 pb-4">
			{!loading ? (
				<>
					{/* <Appointments appointments={appointments} /> */}
					<div
						className={`transform transition-all duration-500 ${
							consultationTypeId ? 'w-64' : 'w-1/2'
						}`}
					>
						<ConsultationTypeList
							consultationTypeId={consultationTypeId}
							setConsultationTypeId={setConsultationTypeId}
						/>
					</div>
					<div
						className={`transform transition-all duration-500 ${
							step >= 2 ? '' : 'hidden'
						}`}
					>
						<Calendar
							appointments={appointments}
							setAppointments={setAppointments}
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
						/>
					</div>
					<div
						className={`transform transition-all duration-500 ${
							step >= 3 ? '' : 'hidden'
						}`}
					>
						<SelectBooking
							selectedDate={selectedDate}
							consultationTypeId={consultationTypeId}
							appointments={appointments}
							setAppointments={setAppointments}
						/>
					</div>
				</>
			) : (
				loader()
			)}
		</div>
	);
}

export default Booking;
