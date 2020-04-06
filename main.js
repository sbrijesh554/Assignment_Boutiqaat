import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import ErrorBoundary from './component/ErrorBoundary';




ReactDOM.render(
   <ErrorBoundary>
      <App />
   </ErrorBoundary>
   ,document.getElementById("container")
);