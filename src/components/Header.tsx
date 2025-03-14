import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { AlignJustifyIcon } from "lucide-react";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <AlignJustifyIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-3">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
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
