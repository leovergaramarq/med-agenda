import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthStorageProvider } from './core/contexts/AuthStorageContext';

import LandingPage from './pages/LandingPage';

function App() {
	return (
		<AuthStorageProvider>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					{/* <Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/appointments" element={<Appointments />} />
					<Route path="/404" element={<NotFound />} /> */}
				</Routes>
			</Router>
		</AuthStorageProvider>
	);
}

export default App;
