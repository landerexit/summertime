import React from 'react';
import ReactDOM from 'react-dom/client';

import './sass/style.sass';

import WindowView from './WindowView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowView />
  </React.StrictMode>
);
