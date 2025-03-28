import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { AlignJustify } from "lucide-react";

export const Header = () => {
  return (
    <header
      className="fixed flex w-full items-center justify-between
border-b-[1px] border-black/20 px-4 py-3 backdrop-blur-md"
    >
      <h1 className="text-lg font-extrabold">코끼리</h1>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <AlignJustify className="h-6 w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute -right-3">
          <DropdownMenuItem>로그인</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
