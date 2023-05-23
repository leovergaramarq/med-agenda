import { twMerge } from 'tailwind-merge';

function Button({ onClick, className, children, disabled }) {
	const handleClick = () => {
		if (typeof onClick === 'function' && !disabled) onClick();
	};

	const defaultClassName = `
        text-white bg-blue-primary text-center rounded-lg shadow-md py-3 px-6 w-auto h-auto text-base
        cursor-pointer font-semibold hover:brightness-110 transition-[padding] duration-200
		${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `;

	return (
		<div
			onClick={handleClick}
			className={twMerge(defaultClassName, className)}
		>
			{children}
		</div>
	);
}

export default Button;
