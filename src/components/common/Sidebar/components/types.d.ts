export type MobileProps = {
  navigation: {
    name: string;
    href: string;
    icon: any;
    current: boolean;
  }[];
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
  navigation: {
    name: string;
    href: string;
    icon: any;
    current: boolean;
  }[];
  teams: {
    id: number;
    name: string;
    office: string;
    imageUrl: string;
    status: "on" | "off" | "notdisturb" | "busy" | any;
  }[];
  logo: any;
};

export type NavigationProps = {
  userNavigation: {
    name: string;
    href: string;
  }[];
  setSidebarOpen: (value: boolean) => void;
};
