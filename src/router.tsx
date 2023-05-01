import React from 'react';
import App from './app';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import { globalSettings } from './global-settings';

const getDefaultRoute = (): RouteObject => {
  return {
    path: '/',
    element: <>Please click a menu item first</>,
  };
};

const getRoutes = () =>
  globalSettings.menuItems.map((item): RouteObject => {
    const { route } = item;
    if (route.lazy)
      return {
        path: route.path,
        element: (
          <React.Suspense fallback={null}>
            <route.lazy />
          </React.Suspense>
        ),
      };
    if (route.element) {
      const { path, element } = route;
      return { path, element };
    }
    throw new Error('element or lazy property is not specified for menu item with path: ' + route.path);
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
      children: [getDefaultRoute(), ...getRoutes()],
      errorElement: <App>Error: Route not found</App>,
    },
  ]);
