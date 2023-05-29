import NotificationCard from './NotificationCard';

function Menu({ notifications }) {
	const noNotification = () => {
		if (notifications.length === 0)
			return <p>No hay notificaciones pendientes :,(</p>;
		else return null;
	};

	return (
		<div className="flex flex-col items-center w-screen">
			<h2 className="text-xl mb-2">Notifications</h2>
			<div className="flex flex-col gap-5 w-1/2 h-32 items-center justify-center shadow-md">
				{notifications.length !== 0 &&
					notifications.map((notification) => (
						<NotificationCard
							key={notification.id}
							info={notification}
						/>
					))}
				{noNotification()}
			</div>
		</div>
	);
}

export default Menu;
