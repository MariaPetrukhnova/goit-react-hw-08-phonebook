import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'app/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate 
        loading={<div>Loading..</div>}
        persistor={persistor}>
        <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
