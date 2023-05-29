function NotificationCard({ info }) {
	const { date, name } = info;

	return (
		<div className="w-full h-full gap-4 flex flex-row items-center justify-center bg-cyan-100">
			<div>{`Remeber that your appointment for ${date}  is tomorrow, don't miss it :)`}</div>
		</div>
	);
}

export default NotificationCard;
