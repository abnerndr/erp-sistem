import Navibar from "./components/Navibar";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Dashboard from "./components/Dashboard";

function Header() {
  const user = {
    name: "Chelsea Hagon",
    email: "chelsea.hagon@example.com",
    office: "admin",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation: any = [
    { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
    { name: "Team", icon: UsersIcon, href: "#", count: 3, current: false },
    { name: "Projects", icon: FolderIcon, href: "#", count: 4, current: false },
    { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
    { name: "Documents", icon: InboxIcon, href: "#", current: false },
    {
      name: "Reports",
      icon: ChartBarIcon,
      href: "#",
      count: 12,
      current: false,
    },
  ];

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  return (
    <>
      <div className="flex flex-col min-w-full min-h-screen fixed">
        <div>
          <Navibar user={user} />
        </div>
        <div className="w-[12%] h-screen">
          <Dashboard navigation={navigation} />
        </div>
      </div>
    </>
  );
}

export default Header;
