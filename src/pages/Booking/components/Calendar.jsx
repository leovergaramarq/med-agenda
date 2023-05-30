import { useEffect, useState } from 'react';

import CalendarControllers from './CalendarControllers';
import CalendarDayBlock from './CalendarDayBook';

import { daysInMonth } from '../../../core/utils/general.util';

function Calendar({ appointments, setAppointments }) {
	const [date, setDate] = useState(new Date());
	const [days, setDays] = useState(() =>
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
			<div className="grid gap-x-8 gap-y-4 grid-cols-7 mt-12">
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
						current_date={
							new Date(date.getFullYear(), date.getMonth(), day)
						}
						month_date={date}
						setAppointments={setAppointments}
						appointments={appointments}
					/>
				))}
			</div>
		</div>
	);
}

export default Calendar;
