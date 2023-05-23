import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

function CalendarControllers({ currDate, changeDate, changeDays }) {
	const handlePrev = (e) => {
		e.preventDefault();
		const prevMonth = currDate.getMonth() - 1;
		const newDays = Array.from({
			length: daysInMonth(prevMonth, currDate.getFullYear())
		}).map((_, i) => i + 1);
		changeDate(new Date(currDate.setMonth(prevMonth)));
		changeDays(newDays);
	};

	const handleNext = (e) => {
		e.preventDefault();
		const nextMonth = currDate.getMonth() + 1;
		const newDays = Array.from({
			length: daysInMonth(nextMonth, currDate.getFullYear())
		}).map((_, i) => i + 1);
		changeDate(new Date(currDate.setMonth(nextMonth)));
		changeDays(newDays);
	};

	return (
		<div className="flex justify-center gap-8">
			<button
				onClick={handlePrev}
				className="bg-gray-300 rounded-full w-8 h-8"
			>
				{'<'}
			</button>
			<p className="text-xl">
				{currDate.toLocaleString('en-us', { month: 'long' }) +
					' ' +
					currDate.getFullYear()}
			</p>
			<button
				onClick={handleNext}
				className="bg-gray-300 rounded-full w-8 h-8"
			>
				{'>'}
			</button>
		</div>
	);
}

function CalendarDayBlock({ schedule, date, setAppointment }) {
	const [occupied, setOccupied] = useState(false);

	const numeric_date = date.toLocaleString('en-us', { day: 'numeric' });
	const date_formated = date.toLocaleString('en-us', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const date_parsed = date
		.toLocaleString('en-us', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		})
		.replaceAll('/', '-');

	useEffect(() => {
		if (schedule[date_parsed]) setOccupied(true);
	}, []);

	const style = occupied
		? 'bg-gray-300 cursor-not-allowed'
		: 'bg-white border-b-4 border-green-500';

	const handleClick = () => {
		if (occupied)
			return Swal('Error', 'This day is already booked', 'error');
		Swal.fire({
			title: 'Are you sure?',
			text: 'You are going to book this day for your appointment.',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, book it!'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Booked!',
					`Your appointment was booked for ${date_formated}.`,
					'success'
				);
				localStorage.setItem(
					'bookedDays',
					JSON.stringify({
						...schedule,
						[date_parsed]: true
					})
				);
				setAppointment({
					...schedule,
					[date_parsed]: true
				});
				console.log(schedule);
				setOccupied(true);
			}
		});
	};

	return (
		<>
			<button
				type="submit"
				className={'w-24 h-24 text-xl rounded ' + style}
				onClick={() => handleClick()}
				disabled={occupied}
			>
				{numeric_date}
			</button>
		</>
	);
}

function Calendar({ schedule, setAppointment }) {
	const [date, setDate] = useState(new Date());
	const [days, setDays] = useState(
		Array.from({
			length: daysInMonth(date.getMonth(), date.getFullYear())
		}).map((_, i) => i + 1)
	);

	return (
		<div>
			<CalendarControllers
				currDate={date}
				changeDate={setDate}
				changeDays={setDays}
			/>
			<div className="grid gap-x-2 gap-y-4 grid-cols-7">
				{days.map((day) => (
					<CalendarDayBlock
						key={day}
						date={
							new Date(date.getFullYear(), date.getMonth(), day)
						}
						setAppointment={setAppointment}
						schedule={schedule}
					/>
				))}
			</div>
		</div>
	);
}

export default Calendar;
