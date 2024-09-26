import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

import { createRoot } from 'react-dom/client'; // Import createRoot from React 18

// Create a root and render the App component wrapped in the Redux Provider
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
