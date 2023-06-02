import { useEffect, useState } from 'react';

import CalendarControllers from './CalendarControllers';
import CalendarDayBlock from './CalendarDayBook';

import moment from 'moment';

function Calendar({
	appointments,
	setAppointments,
	selectedDate,
	setSelectedDate
}) {
	const [date, setDate] = useState(new Date());
	const [days, setDays] = useState(() =>
		Array.from({
			length: moment(date).daysInMonth()
		}).map((_, i) => i + 1)
	);

	useEffect(() => {
		setDays(
			Array.from({
				length: moment(date).daysInMonth()
			}).map((_, i) => i + 1)
		);
	}, [date]);

	return (
		<div>
			<CalendarControllers currDate={date} changeDate={setDate} />
			<div className="grid gap-x-8 gap-y-4 grid-cols-7 mt-8">
				<div className="text-center">Sunday</div>
				<div className="text-center">Monday</div>
				<div className="text-center">Tuesday</div>
				<div className="text-center">Wednesday</div>
				<div className="text-center">Thursday</div>
				<div className="text-center">Friday</div>
				<div className="text-center">Saturday</div>
				{days.map((day, i) => (
					<CalendarDayBlock
						key={i}
						setAppointments={setAppointments}
						appointments={appointments}
						current_date={moment(date).set('date', day)}
						month_date={date}
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
					/>
				))}
			</div>
		</div>
	);
}

export default Calendar;
