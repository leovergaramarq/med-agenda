import Swal from 'sweetalert2';

import { createBooking } from '../../../core/api/booking.api';

import { getTokenPayload } from '../../../core/utils/session.util';

import {
	consultationsAvailable,
	doctors
} from '../../../shared/mocks/consultation.mock';

import DoctorMaleIcon from '../../../assets/icons/doctor-male.svg';
import DoctorFemaleIcon from '../../../assets/icons/doctor-female.svg';

function SelectBooking({
	selectedDate,
	consultationTypeId,
	appointments,
	setAppointments
}) {
	const consults = consultationsAvailable
		.filter(({ day, idType }) => {
			return day === selectedDate && idType === consultationTypeId;
		})
		.map(({ idDoctor, timeStart, timeEnd }) => ({
			doctor: doctors.find(({ id }) => id === idDoctor),
			timeStart,
			timeEnd
		}));

	const handleSelect = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You are going to book this day for your appointment.',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, book it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Booked!',
					`Your appointment was booked for ${selectedDate}`,
					'success'
				);
				const { id: idUser } = getTokenPayload();
				const idType = 1;
				const { data, status } = await createBooking({
					idUser,
					date: selectedDate,
					idType
				});
				if (status === 201) {
					const { id } = data;
					setAppointments([
						...appointments,
						{
							id,
							idUser,
							date: selectedDate,
							idType,
							pending: true
						}
					]);
				} else if (status === 400) {
					Swal.fire(
						'Error',
						'You can only book with one or more days of anticipation. The date must be later than today',
						'error'
					);
				} else {
					Swal.fire('Error', 'Something went wrong', 'error');
					console.log('Error', data);
				}
			}
		});
	};

	return (
		<div className="">
			<h1 className="text-center text-2xl">Appointment Selection</h1>
			<div className="flex flex-col gap-4 items-center">
				{consults.length ? (
					consults.map(({ doctor, timeStart, timeEnd }, i) => (
						<div className="flex gap-1" key={i}>
							<img
								src={
									doctor.gender === 'male'
										? DoctorMaleIcon
										: DoctorFemaleIcon
								}
								alt="Doctor"
								className="w-16 h-16 rounded-full"
							/>
							<div className="flex flex-col gap-1">
								<h2 className="text-md">{doctor.name}</h2>
								<p className="text-sm text-gray-400">
									{timeStart} - {timeEnd}
								</p>
								<button
									className="bg-green-400 text-white font-semibold rounded-md px-4 py-2"
									onClick={handleSelect}
								>
									Book
								</button>
							</div>
						</div>
					))
				) : (
					<p className="italic text-gray-400">
						No appointments available
					</p>
				)}
			</div>
		</div>
	);
}

export default SelectBooking;
