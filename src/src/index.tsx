import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store'; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);

// Start measuring performance
reportWebVitals(console.log); // Logs performance metrics to the console
