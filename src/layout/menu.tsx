
import { globalSettings } from '../global-settings';
import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const Menu = () => (
  <List component='nav'>
    {globalSettings.menuItems.map((item) => {
      return (
        <ListItemButton component={Link} to={item.route.path} key={item.label}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.label}</ListItemText>
        </ListItemButton>
      );
    })}
  </List>
);
