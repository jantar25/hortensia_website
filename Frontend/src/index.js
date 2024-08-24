import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './Redux/store.js'

import App from './App';
import './index.css';
import './i18next/i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <React.Suspense fallback="Loading">
        <App />
      </React.Suspense>
    </PersistGate>
  </Provider>
);

