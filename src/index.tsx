import React, { ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './styles/global.css';

// Logging function for web vitals
const logWebVitals = (metric: any) => {
  console.log(`${metric.name}: ${metric.value}`);
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary 
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div role="alert" className="error-fallback">
          <h2>Something went wrong</h2>
          <pre style={{ color: "red" }}>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
      onError={(error: Error, info: ErrorInfo) => {
        console.error('Uncaught error:', error);
        console.error('Component Stack:', info.componentStack);
      }}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals(logWebVitals);
