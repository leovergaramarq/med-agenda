import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthStorageProvider } from './core/contexts/AuthStorageContext';

import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

function App() {
	return (
		<AuthStorageProvider>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Router>
		</AuthStorageProvider>
	);
}

export default App;
