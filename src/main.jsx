import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import App from './App.jsx';
import './index.css';

// https://reactcommunity.org/react-modal/accessibility/
ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
