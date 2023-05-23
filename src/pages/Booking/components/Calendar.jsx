import { useState } from 'react';

import CalendarControllers from './CalendarControllers';
import CalendarDayBlock from './CalendarDayBook';

import { daysInMonth } from '../../../core/utils/general.util';

function Calendar({ appointments, setAppointments }) {
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
				{days.map((day, i) => (
					<CalendarDayBlock
						key={i}
						date={
							new Date(date.getFullYear(), date.getMonth(), day)
						}
						setAppointments={setAppointments}
						appointments={appointments}
					/>
				))}
			</div>
		</div>
	);
}

export default Calendar;
