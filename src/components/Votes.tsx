import { FilterButton } from "@/components/ui/filter-button";
import { cn } from "@/libs/shadcn/utils";
import { MOCK_VOTE_LIST } from "@/mock/vote_list";
import { formatExpirationTime } from "@/utils/calcTime";

import { ChevronRight, Clock, Users } from "lucide-react";
import Link from "next/link";

export const Votes = () => {
  return (
    <div className="w-full space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-extrabold">진행중인 투표</p>
        <FilterButton />
      </div>
      <ul className="w-full space-y-8">
        {MOCK_VOTE_LIST.map(
          ({ id, title, description, votes_count, expires_at }) => {
            const formattedRemainTime = formatExpirationTime(expires_at);

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
                    <p className="text-sm text-black/70">{description}</p>
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
        )}
      </ul>
    </div>
  );
};
