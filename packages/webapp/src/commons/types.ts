export interface INavItem {
  label: string;
  link: string;
}

export interface INavBar {
  options: INavItem[];
}

export interface IMemoizeAsync {
  key: string;
  url: string;
  duration: number;
}
