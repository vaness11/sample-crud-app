export type MenuItem = {
  path: string;
  element?: JSX.Element;
  lazy?: React.LazyExoticComponent<React.ComponentType<any>>;
};

type GlobalSettings = {
  menuItems: MenuItem[];
};

export const globalSettings: GlobalSettings = {
  menuItems: [],
};
