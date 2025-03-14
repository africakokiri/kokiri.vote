import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { AlignJustifyIcon, UserRound } from "lucide-react";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <AlignJustifyIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-3">
        <DropdownMenuLabel
          className="flex w-full items-center gap-2"
          asChild
        >
          <button>
            <div
              className="h-fit w-fit rounded-full border-[1px]
border-black/20 p-1"
            >
              <UserRound />
            </div>
            <span>로그인</span>
          </button>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Header = () => {
  return (
    <header
      className="fixed flex w-full items-center justify-between p-4
backdrop-blur-md"
    >
      <h1 className="text-xl font-extrabold">코끼리</h1>
      <Dropdown />
    </header>
  );
};
