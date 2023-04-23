import lazy from 'react-lazy-named';
import { globalSettings } from '../../global-settings';

export const setupTest = () => {
  globalSettings.menuItems = [
    {
      path: '/test',
      lazy: lazy(() => import('./test'), 'Test'),
    },
  ];
};
