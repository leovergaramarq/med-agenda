function NotFound() {
	return (
		<div className="h-screen relative bg-not-found bg-contain bg-no-repeat bg-center">
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0">
				<div className="text-4xl font-semibold text-blue-primary px-8 py-4 rounded-3xl bg-white text-center flex flex-col gap-5">
					<span className="text-2xl font-medium text-blue-primary">
						Página no encontrada
					</span>
					<div className="text-base font-normal text-gray-700">
						Lo sentimos, la página que buscas no existe o no está
						disponible por el momento.
					</div>
					<a
						href="."
						className="text-xl font-normal text-blue-primary hover:underline"
					>
						Volver al inicio
					</a>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
