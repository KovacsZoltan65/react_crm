import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//import 'index.css';
import App from 'App';
//import reportWebVitals from 'reportWebVitals';

import { store } from 'store/store';

import 'i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'config/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

serviceWorkerRegistration.register({
    onUpdate: (registration) => {
        const waitingServiceWorker = registration.waiting;

        if (waitingServiceWorker) {
            waitingServiceWorker.addEventListener('statechange', (event) => {
              if ((event.target).state === 'activated') window.location.reload();
            });
            waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
        }
    }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
