import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css'

const root = ReactDOMClient.createRoot(document.body);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
