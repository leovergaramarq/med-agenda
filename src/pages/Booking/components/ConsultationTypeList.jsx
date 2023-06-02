import { consultationTypes } from '../../../shared/mocks/consultation.mock';

function ConsultationTypeList({ consultationTypeId, setConsultationTypeId }) {
	const handleSelectConsultationType = (id) => () => {
		if (consultationTypeId !== id) {
			setConsultationTypeId(id);
		}
	};

	return (
		<div>
			<h1 className="text-center text-2xl">Consult Type</h1>
			<div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
				{consultationTypes.map(({ id, description, name }, i) => (
					<div
						key={i}
						className={`flex flex-row justify-between items-center border-2 rounded-lg py-3 px-6 cursor-pointer transition-all duration-500 ${
							consultationTypeId === id
								? 'bg-green-300'
								: 'bg-white hover:bg-green-100'
						}`}
						onClick={handleSelectConsultationType(id)}
					>
						<div className="flex flex-col gap-2">
							<h2 className="text-xl">{name}</h2>
							<p>{description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ConsultationTypeList;
