"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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
import { calcRemainDate } from "@/utils/calcRemainDate";

import { ChevronRight, Clock, Filter, Plus, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MOCK_DATA_EXPIRES_AT_ASC = MOCK_VOTE_LIST.sort((a, b) => {
  if (a.expires_at > b.expires_at) return 1;
  if (a.expires_at < b.expires_at) return -1;

  return 0;
});

export default function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "전체" | number
  >("전체");

  return (
    <div className="space-y-4 px-4">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-extrabold">진행중인 투표</p>
        <div className="flex items-center gap-4">
          <button
            className="h-fit w-fit rounded-md border-[1px] border-black/20
p-3"
          >
            <Plus className="h-4 w-4" />
          </button>
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
            <DropdownMenuContent
              className="absolute -right-5 min-w-[100px]"
            >
              <DropdownMenuLabel className="flex justify-center">
                카테고리
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup className="space-y-2">
                <DropdownMenuRadioItem
                  onSelect={() => setSelectedCategory("전체")}
                  value="전체"
                >
                  전체
                </DropdownMenuRadioItem>
                {Object.entries(CATEGORY).map(([key, value]) => {
                  return (
                    <DropdownMenuRadioItem
                      key={key}
                      value={key}
                      onSelect={() => setSelectedCategory(value)}
                    >
                      {key}
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {MOCK_DATA_EXPIRES_AT_ASC.map(
        ({
          id,
          title,
          description,
          votes_count,
          expires_at,
          category
        }) => {
          const remainDate = calcRemainDate(expires_at);

          if (
            selectedCategory === category ||
            selectedCategory === "전체"
          ) {
            return (
              <Card
                key={id}
                className="h-full"
              >
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-xl">
                    {title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex items-center gap-4 text-sm
text-muted-foreground"
                  >
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{votes_count}명</span>
                    </div>
                    <div
                      className={cn(
                        "flex items-center gap-1",
                        remainDate.includes("분 남음") && "text-red-500"
                      )}
                    >
                      <Clock className="h-4 w-4" />
                      <span>{remainDate}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/vote/${id}`}
                    className="ml-auto"
                  >
                    <Button
                      variant="ghost"
                      className="gap-1"
                      aria-label="투표하기"
                    >
                      투표하기
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          }
        }
      )}
    </div>
  );
}
