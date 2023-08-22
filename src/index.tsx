import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';

Sentry.init({
    dsn: "https://0c788262ad4819b63011a0e5427ac13e@o4505746791399424.ingest.sentry.io/4505746791989248",
    release: `v0.0.1`,
    environment: `production`,
    integrations: [
        new Sentry.BrowserTracing({
            tracePropagationTargets: [`localhost`],
        }),
        new Sentry.Replay(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
