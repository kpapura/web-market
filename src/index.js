import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import { App } from 'components/App';
import { persistor, store } from 'components/redux/store';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='web-market'>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
        <ToastContainer autoClose={1500} />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
