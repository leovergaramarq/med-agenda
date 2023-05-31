import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Notifications from './pages/Notifications';
import Booking from './pages/Booking';
import ProtectedRoute from './shared/components/ProtectedRoute';
import GuestRoute from './shared/components/GuestRoute';
import LoginComponent from './pages/Login';
import History from './pages/History/History';

function App() {
	return (
		<div className="font-wix-madefor-display">
			<Router>
				<Routes>
					<Route path="" element={<GuestRoute />}>
						<Route index path="/" element={<LandingPage />} />
						<Route path="/login" element={<LoginComponent />} />
					</Route>
					<Route path="" element={<ProtectedRoute />}>
						<Route path="/home" element={<Home />} />
						<Route path="/booking" element={<Booking />} />
						<Route path='/history' element={<History />} />
						<Route
							path="/notifications"
							element={<Notifications />}
						/>
					</Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
