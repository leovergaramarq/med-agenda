export const consultationTypes = [
	{
		id: 1,
		name: 'Annual physical examination',
		code: 'APE',
		description:
			'A routine check-up to assess overall health, including measurements of vital signs, blood tests, and discussions about any health concerns or lifestyle modifications.'
	},
	{
		id: 2,
		name: 'Follow-up for chronic condition management',
		code: 'FCCM',
		description:
			'A scheduled visit to monitor and manage an ongoing medical condition, such as diabetes, hypertension, or asthma. The appointment may involve adjusting medication dosages, reviewing test results, and addressing any new symptoms or concerns.'
	},
	{
		id: 3,
		name: 'Respiratory infection symptoms (e.g., cough, congestion)',
		code: 'RISC',
		description:
			'An appointment sought due to symptoms like persistent cough, nasal congestion, sore throat, or difficulty breathing. The healthcare provider will evaluate the symptoms, potentially order tests, and provide appropriate treatment recommendations.'
	},
	{
		id: 4,
		name: 'Back pain evaluation',
		code: 'BPE',
		description:
			"A consultation to evaluate and diagnose the cause of back pain. The healthcare provider may conduct a physical examination, ask questions about the pain's duration and intensity, and recommend imaging or further tests if needed."
	},
	{
		id: 5,
		name: 'Diabetes management consultation',
		code: 'DMC',
		description:
			'A specialized appointment for individuals with diabetes to review blood sugar levels, discuss dietary and lifestyle modifications, adjust medication or insulin regimens, and address any concerns related to diabetes management.'
	},
	{
		id: 6,
		name: 'Dermatology consultation for skin rash',
		code: 'DCSR',
		description:
			'An appointment with a dermatologist to evaluate and diagnose a skin rash or other related skin conditions. The dermatologist will examine the affected area, ask about any accompanying symptoms, and recommend appropriate treatment options.'
	},
	{
		id: 7,
		name: 'Pre-operative assessment for upcoming surgery',
		code: 'PAFUS',
		description:
			"A comprehensive evaluation before a scheduled surgery to assess the patient's overall health and identify any potential risks or complications. The healthcare provider will review medical history, order necessary tests, and provide instructions to prepare for the upcoming procedure."
	},
	{
		id: 8,
		name: 'Mental health counseling session',
		code: 'MHC',
		description:
			'An appointment with a mental health professional to address and discuss mental health concerns, such as anxiety, depression, stress, or emotional difficulties. The session may involve therapy techniques, coping strategies, and potentially medication management if needed.'
	},
	{
		id: 9,
		name: 'Allergy testing and evaluation',
		code: 'ATE',
		description:
			'An appointment to assess and diagnose allergies. The healthcare provider may perform skin or blood tests to identify specific allergens, discuss symptom triggers, and develop an appropriate treatment plan, including avoidance strategies or medications.'
	},
	{
		id: 10,
		name: 'Pediatric immunization visit',
		code: 'PIV',
		description:
			'A scheduled visit for children to receive recommended vaccines according to their age and immunization schedule. The healthcare provider will administer the vaccines, discuss potential side effects, and answer any questions regarding immunization.'
	},
	{
		id: 11,
		name: 'Other - general consultation',
		code: 'OGC',
		description:
			'A general consultation for any other health concerns or questions. The healthcare provider will evaluate the symptoms, potentially order tests, and provide appropriate treatment recommendations.'
	}
];

export const doctors = [
	{
		id: 1,
		name: 'Dr. John Doe',
		gender: 'male'
	},
	{
		id: 2,
		name: 'Dr. Sarah Smith',
		gender: 'female'
	},
	{
		id: 3,
		name: 'Dr. Michael Johnson',
		gender: 'male'
	},
	{
		id: 4,
		name: 'Dr. Emily Wilson',
		gender: 'female'
	},
	{
		id: 5,
		name: 'Dr. David Lee',
		gender: 'male'
	},
	{
		id: 6,
		name: 'Dr. Jessica Anderson',
		gender: 'female'
	},
	{
		id: 7,
		name: 'Dr. Andrew Taylor',
		gender: 'male'
	},
	{
		id: 8,
		name: 'Dr. Olivia Brown',
		gender: 'female'
	},
	{
		id: 9,
		name: 'Dr. William Martinez',
		gender: 'male'
	},
	{
		id: 10,
		name: 'Dr. Sophia Clark',
		gender: 'female'
	}
];

// export const consultationsAvailable = [
// 	{
// 		idDoctor: 1,
// 		idType: 1,
// 		day: '2023-06-01',
// 		timeStart: '09:00',
// 		timeEnd: '10:00'
// 	},
// 	{
// 		idDoctor: 2,
// 		idType: 1,
// 		day: '2023-06-01',
// 		timeStart: '08:30',
// 		timeEnd: '09:30'
// 	},
// 	{
// 		idDoctor: 2,
// 		idType: 2,
// 		day: '2023-06-02',
// 		timeStart: '14:30',
// 		timeEnd: '15:30'
// 	},
// 	{
// 		idDoctor: 3,
// 		idType: 3,
// 		day: '2023-06-03',
// 		timeStart: '14:30',
// 		timeEnd: '15:30'
// 	},
// 	{
// 		idDoctor: 5,
// 		idType: 5,
// 		day: '2023-06-03',
// 		timeStart: '14:30',
// 		timeEnd: '15:30'
// 	},
// 	{
// 		idDoctor: 6,
// 		idType: 6,
// 		day: '2023-06-03',
// 		timeStart: '14:30',
// 		timeEnd: '15:30'
// 	},
// 	{
// 		idDoctor: 8,
// 		idType: 8,
// 		day: '2023-06-03',
// 		timeStart: '14:30',
// 		timeEnd: '15:30'
// 	},
// 	{
// 		idDoctor: 8,
// 		idType: 3,
// 		day: '2023-06-05',
// 		timeStart: '19:00',
// 		timeEnd: '20:00'
// 	},
// 	{
// 		idDoctor: 3,
// 		idType: 3,
// 		day: '2023-06-05',
// 		timeStart: '11:00',
// 		timeEnd: '12:00'
// 	},
// 	{
// 		idDoctor: 4,
// 		idType: 4,
// 		day: '2023-06-07',
// 		timeStart: '16:00',
// 		timeEnd: '17:00'
// 	},
// 	{
// 		idDoctor: 5,
// 		idType: 5,
// 		day: '2023-06-09',
// 		timeStart: '09:30',
// 		timeEnd: '10:30'
// 	},
// 	{
// 		idDoctor: 10,
// 		idType: 5,
// 		day: '2023-06-09',
// 		timeStart: '05:30',
// 		timeEnd: '06:30'
// 	},
// 	{
// 		idDoctor: 6,
// 		idType: 6,
// 		day: '2023-06-12',
// 		timeStart: '13:45',
// 		timeEnd: '14:45'
// 	},
// 	{
// 		idDoctor: 7,
// 		idType: 7,
// 		day: '2023-06-15',
// 		timeStart: '10:30',
// 		timeEnd: '11:30'
// 	},
// 	{
// 		idDoctor: 5,
// 		idType: 7,
// 		day: '2023-06-15',
// 		timeStart: '11:30',
// 		timeEnd: '12:30'
// 	},
// 	{
// 		idDoctor: 8,
// 		idType: 8,
// 		day: '2023-06-17',
// 		timeStart: '14:00',
// 		timeEnd: '15:00'
// 	},
// 	{
// 		idDoctor: 9,
// 		idType: 9,
// 		day: '2023-06-20',
// 		timeStart: '11:30',
// 		timeEnd: '12:30'
// 	},
// 	{
// 		idDoctor: 10,
// 		idType: 10,
// 		day: '2023-06-25',
// 		timeStart: '15:30',
// 		timeEnd: '16:30'
// 	}
// ];
function genConsultations(n) {
	return Array.from({ length: n }, (_) => ({
		idDoctor: Math.floor(Math.random() * 10) + 1,
		idType: Math.floor(Math.random() * 10) + 1,
		day: `2023-06-${Math.floor(Math.random() * 30) + 1}`,
		timeStart: `${Math.floor(Math.random() * 23) + 1}:00`,
		timeEnd: `${Math.floor(Math.random() * 23) + 1}:00`
	}));
}

export const consultationsAvailable = [
	...genConsultations(1000),
	{
		idDoctor: 3,
		idType: 3,
		day: '2023-06-03',
		timeStart: '14:30',
		timeEnd: '15:30'
	},
	{
		idDoctor: 5,
		idType: 5,
		day: '2023-06-03',
		timeStart: '14:30',
		timeEnd: '15:30'
	},
	{
		idDoctor: 6,
		idType: 6,
		day: '2023-06-03',
		timeStart: '14:30',
		timeEnd: '15:30'
	},
	{
		idDoctor: 8,
		idType: 8,
		day: '2023-06-03',
		timeStart: '14:30',
		timeEnd: '15:30'
	}
];
