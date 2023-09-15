"use client";

import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

interface SideNavbarItemProps {
  label: string;
  icon: IconType;
  onClick: () => void;
}

const SideNavbarItem: React.FC<SideNavbarItemProps> = ({
  label,
  icon: Icon,
  onClick,
}) => {
  const pathname = usePathname();

  return (
    <div
      onClick={onClick}
      className={`w-full py-4 pl-8 flex flex-row gap-2 items-center border-r-4 ${
        pathname.includes(label.toLowerCase())
          ? "bg-rose-700/10 border-rose-700"
          : "bg-white border-white"
      } cursor-pointer`}
    >
      <Icon
        size={20}
        className={`${
          pathname.includes(label.toLowerCase())
            ? "text-black"
            : "text-neutral-600"
        }`}
      />
      <div
        className={`text-xs font-bold ${
          pathname.includes(label.toLowerCase())
            ? "text-rose-700"
            : "text-neutral-600"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default SideNavbarItem;
