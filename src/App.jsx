import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
