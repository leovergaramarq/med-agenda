import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';
import ProtectedRoute from './core/utils/ProtectedRoute';
import LoginComponent from './pages/Login';

function App() {
	return (
		<div className="font-wix-madefor-display">
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/home" element={<Home />} />
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
		</div>
	);
}

export default App;
