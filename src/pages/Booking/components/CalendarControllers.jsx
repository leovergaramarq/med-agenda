import moment from 'moment';
import { daysInMonth } from '../../../core/utils/general.util';

function CalendarControllers({ currDate, changeDate }) {
	const handlePrev = (e) => {
		e.preventDefault();
		changeDate(moment(currDate).subtract(1, 'month').toDate());
	};

	const handleNext = (e) => {
		e.preventDefault();
		changeDate(moment(currDate).add(1, 'month').toDate());
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
