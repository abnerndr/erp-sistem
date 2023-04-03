type ChildrenNavigationProps<T> = {
  name: string;
  href: string;
  permissions?: [];
};

type NavigationProps<T> = {
  name: string;
  icon: any;
  current: boolean;
  module: string;
  href: string;
  permissions?: [];
  children?: ChildrenNavigationProps;
}[];

export type MobileProps = {
  navigation: NavigationProps[];
  activeNav: string;
  teams: {
    id: number;
    name: string;
    office: string;
    imageUrl: string;
    status: "on" | "off" | "nodisturbe" | "busy" | any;
  }[];
  logo: any;
};

export type LargeScreenProps = {
  navigation: NavigationProps[];
  activeNav: string;
  teams: {
    id: number;
    name: string;
    office: string;
    imageUrl: string;
    status: "on" | "off" | "notdisturb" | "busy" | any;
  }[];
  logo: any;
};

export type UserNavigationProps = {
  userNavigation: {
    name: string;
    href: string;
  }[];
  setSidebarOpen: (value: boolean) => void;
};
