import { Menu } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Avatar from "boring-avatars";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "/src/features/auth/auth.store";
import IconButton from "/src/features/ui/icon-button";
import TextField from "/src/features/ui/text-field";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <nav className="relative flex items-center justify-between px-4 py-2 shadow">
      {/* logo */}
      <ul>
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-tighter text-primary">
            facebook
          </h1>
        </Link>
      </ul>

      {/* search */}
      <ul className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-screen-sm">
          <TextField filled pill fullWidth placeholder="Search Facebook" />
        </div>
      </ul>

      {/* end */}
      <ul className="flex items-center gap-2.5">
        <li>
          <IconButton
            Icon={<ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />}
            filled
          />
        </li>
        <li>
          <IconButton Icon={<BellIcon className="h-5 w-5" />} filled />
        </li>
        <li>
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="relative cursor-pointer hover:brightness-90">
              <Avatar size={40} name={user?.firstName} />
              <ChevronDownIcon className="absolute right-0 bottom-0 h-4 w-4 rounded-base bg-gray-200 p-1" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-1 w-64 origin-top-right divide-y divide-gray-100 rounded-base border bg-white p-2 text-left shadow-xl focus:outline-none">
              <Menu.Item>
                <button
                  onClick={() => {
                    logout();
                    navigate("/auth");
                  }}
                  className="flex w-full items-center gap-2 rounded-base px-2 py-1 text-left hover:bg-gray-100"
                >
                  <IconButton
                    Icon={<ArrowRightOnRectangleIcon className="h-4 w-4" />}
                    filled
                  />
                  Log Out
                </button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </li>
      </ul>
    </nav>
  );
}
