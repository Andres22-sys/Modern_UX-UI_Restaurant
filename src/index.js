import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// Get the root DOM node
const rootElement = document.getElementById('root');

// Create the React root
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
