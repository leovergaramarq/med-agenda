import ReactModal from 'react-modal';

import CloseIcon from '../../assets/icons/close.svg';

function Modal({ isOpen, setIsOpen, styles, children }) {
	const onClose = () => {
		setIsOpen(false);
	};
	console.log(styles.overlay);

	return (
		<ReactModal
			isOpen={isOpen}
			style={{
				overlay: {
					zIndex: 50,
					transition: 'opacity 0.3s ease-in-out',
					...styles?.overlay
				},
				content: {
					margin: 'auto',
					...styles?.content
				}
			}}
		>
			<div className="relative h-full">
				<img
					src={CloseIcon}
					alt="Cerrar"
					className="opacity-50 absolute top-0 right-0 w-4 h-4 cursor-pointer"
					onClick={onClose}
				/>
				{children}
			</div>
		</ReactModal>
	);
}

export default Modal;
