import { useRef, useState } from 'react';

import { updateBooking } from '../../../core/api/booking.api';

import './StarRating.css';
import Swal from 'sweetalert2';

const StarRating = ({appointment, setOpenModal, setOnRate}) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const comments = useRef()

	const onFinished = async () => {
		const response = await updateBooking(appointment.id, {rating, comments: comments.current.value})
		if (response.status === 200) {
			Swal.fire(
				'Rated!',
				`Your appointment was rated.`,
				'success'
			);
			setOpenModal(false);
			setOnRate(true);
		}else{
			Swal.fire(
				'Error!',
				`Your appointment was not rated.`,
				'error'
			);
		}
	}	

	return (
		<div className="star-rating">
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						className={index <= (hover || rating) ? 'on' : 'off'}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className="star">&#9733;</span>
					</button>
				);
			})}
			<input ref={comments} type="text" name='comments'/>
			<button onClick={onFinished}>Submit</button>
		</div>
	);
};

export default StarRating;
