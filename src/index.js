import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next/i18next';
import './index.css'
import App from './App'

import { store,persistor } from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <React.Suspense fallback="Loading">
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </React.Suspense>
    </PersistGate>
  </Provider>
)