import React from 'react';
import App from './app';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import { globalSettings } from './global-settings';

const getRoutes = () =>
  globalSettings.menuItems.map((item): RouteObject => {
    if (item.lazy)
      return {
        path: item.path,
        element: (
          <React.Suspense fallback={null}>
            <item.lazy />
          </React.Suspense>
        ),
      };
    if (item.element) {
      const { path, element } = item;
      return { path, element };
    }
    throw new Error('element or lazy property is not specified for menu item with path: ' + item.path);
  });

export const getRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: (
        <App>
          <Outlet />
        </App>
      ),
      children: getRoutes(),
      errorElement: <App>Error: Route not found</App>,
    },
  ]);
