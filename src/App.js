import React from 'react';
import Calculator from './components/Calculator';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

function App() {
  return (
      <Provider store={store}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;