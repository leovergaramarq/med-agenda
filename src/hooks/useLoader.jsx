import { useState } from 'react';

function useLoader() {
	const [loading, setLoading] = useState(true);

	const loader = () => {
		if (!loading) return null;
		return (
			<>
				<div className="animate-spinner loader rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>{' '}
			</>
		);
	};

	return { loading, setLoading, loader };
}

export default useLoader;
