"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { CATEGORY } from "@/constants/category";

import { Filter } from "lucide-react";
import { useState } from "react";

export const FilterButton = () => {
  const [selected, setSelected] = useState("전체");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="outline-none"
      >
        <button
          className="h-fit w-fit rounded-md border-[1px] border-black/20
p-3"
        >
          <Filter className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-5 min-w-[100px]">
        <DropdownMenuLabel className="flex justify-center">
          카테고리
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selected}
          onValueChange={setSelected}
          className="space-y-2"
        >
          <DropdownMenuRadioItem
            value="전체"
            className="flex justify-center"
          >
            전체
          </DropdownMenuRadioItem>
          {Object.entries(CATEGORY).map(([item]) => {
            return (
              <DropdownMenuRadioItem
                key={item}
                value={item}
                className="flex justify-center"
              >
                {item}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
