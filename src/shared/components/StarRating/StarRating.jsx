import { useRef, useState } from 'react';

import { updateBooking } from '../../../core/api/booking.api';

import './StarRating.css';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const StarRating = ({ appointment, setOpenModal, setOnRate }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const comments = useRef();

	const onFinished = async () => {
		if (rating === 0) {
			toast.error('You must rate the appointment');
			return;
		}
		const response = await updateBooking(appointment.id, {
			rating,
			comments: comments.current.value
		});
		if (response.status === 200) {
			Swal.fire('Rated!', `Your appointment was rated.`, 'success');
			setOpenModal(false);
			setOnRate(true);
		} else {
			Swal.fire('Error!', `Your appointment was not rated.`, 'error');
		}
	};

	return (
		<>
			<div className="mt-3 flex gap-3 star-rating">
				{[...Array(5)].map((star, index) => {
					index += 1;
					return (
						<button
							type="button"
							key={index}
							className={
								index <= (hover || rating) ? 'on' : 'off'
							}
							onClick={() => setRating(index)}
							onMouseEnter={() => setHover(index)}
							onMouseLeave={() => setHover(rating)}
						>
							<span className="text-4xl star">&#9733;</span>
						</button>
					);
				})}
			</div>
			<input ref={comments} type="text" name="comments" />
			<button
				className="bg-blue-secondary w-24 h-12 rounded text-white transition-all hover:bg-blue-primary"
				onClick={onFinished}
			>
				Submit
			</button>
			<ToastContainer />
		</>
	);
};

export default StarRating;
