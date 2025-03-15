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
import { cn } from "@/libs/shadcn/utils";
import { MOCK_VOTE_LIST } from "@/mock/vote_list";
import { formatExpirationTime } from "@/utils/calcTime";

import { ChevronRight, Clock, Filter, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Votes = () => {
  const [selected, setSelected] = useState("전체");

  return (
    <div className="w-full space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-extrabold">진행중인 투표</p>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="outline-none"
          >
            <button
              className="h-fit w-fit rounded-md border-[1px]
border-black/20 p-3"
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
      </div>
      <ul className="w-full space-y-8">
        {MOCK_VOTE_LIST.map(
          ({
            id,
            title,
            description,
            votes_count,
            expires_at,
            category
          }) => {
            const formattedRemainTime = formatExpirationTime(expires_at);

            if (selected === "전체" || selected === category) {
              return (
                <li
                  key={id}
                  className="space-y-4 rounded-md border-[1px]
border-black/20 p-6 shadow-md"
                >
                  <Link href={`vote/${id.toString()}`}>
                    {/* title, description */}
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">{title}</p>
                      <p className="text-sm text-black/70">
                        {description}
                      </p>
                    </div>

                    {/* others */}
                    <div
                      className="flex items-center gap-6 pt-3 text-sm
text-black/70"
                    >
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{votes_count}</span>
                      </div>
                      <div
                        className={cn(
                          "flex items-center gap-1",
                          !formattedRemainTime.includes("일") &&
                            "text-red-500"
                        )}
                      >
                        <Clock className="h-4 w-4" />
                        <span>{formattedRemainTime}</span>
                      </div>
                    </div>

                    {/* footer */}
                    <div className="flex justify-end pt-3">
                      <p className="flex items-center">
                        투표하기
                        <ChevronRight className="h-4 w-4" />
                      </p>
                    </div>
                  </Link>
                </li>
              );
            }
          }
        )}
      </ul>
    </div>
  );
};
