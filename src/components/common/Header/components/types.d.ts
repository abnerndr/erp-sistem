export type NavibarProps = {
  user: {
    name: string | null;
    email: string | null;
    office: office | null;
    imageUrl: string;
  };
};

export type DashboardProps = {
  navigation: {
    name: string | null;
    count: number;
    icon: any;
    href: string;
    current: boolean;
  }[];
};
