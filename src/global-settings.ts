type Route = {
  path: string;
  element?: JSX.Element;
  lazy?: React.LazyExoticComponent<React.ComponentType<any>>;
};

export type MenuItem = {
  route: Route;
  label: string;
  icon: JSX.Element;
};

type GlobalSettings = {
  menuItems: MenuItem[];
};

export const globalSettings: GlobalSettings = {
  menuItems: [],
};
