import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './setup-features';
import { RouterProvider } from 'react-router-dom';
import { setupFeatures } from './setup-features';
import { getRouter } from './router';

setupFeatures();
const router = getRouter();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
