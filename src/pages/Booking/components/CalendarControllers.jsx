import { daysInMonth } from '../../../core/utils/general.util';

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

export default CalendarControllers;
