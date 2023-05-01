import lazy from 'react-lazy-named';
import { globalSettings } from '../../global-settings';
import PeopleIcon from '@mui/icons-material/People';

export const setupTest = () => {
  globalSettings.menuItems.push({
    route: {
      path: '/test',
      lazy: lazy(() => import('./test'), 'Test'),
    },
    icon: <PeopleIcon />,
    label: 'TestObjects',
  });
};
