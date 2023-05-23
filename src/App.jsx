import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthStorageProvider } from './core/contexts/AuthStorageContext';

import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';
import ProtectedRoute from './core/utils/ProtectedRoute';

function App() {
	return (
		<AuthStorageProvider>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="/*" element={<NotFound />} />
					<Route
						path="/booking"
						element={
							<ProtectedRoute>
								<Booking />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</AuthStorageProvider>
	);
}

export default App;
