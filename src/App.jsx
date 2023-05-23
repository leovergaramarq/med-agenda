import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';
import ProtectedRoute from './shared/components/ProtectedRoute';
import GuestRoute from './shared/components/GuestRoute';
import LoginComponent from './pages/Login';

function App() {
	return (
		<div className="font-wix-madefor-display">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<GuestRoute>
								<LandingPage />
							</GuestRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<GuestRoute>
								<LoginComponent />
							</GuestRoute>
						}
					/>
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/booking"
						element={
							<ProtectedRoute>
								<Booking />
							</ProtectedRoute>
						}
					/>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
