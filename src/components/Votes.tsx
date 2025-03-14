import { MOCK_VOTE_LIST } from "@/mock/vote_list";

import { Clock, Users } from "lucide-react";

export const Votes = () => {
  return (
    <div className="w-full space-y-8 pt-6">
      <p className="text-3xl font-extrabold">진행중인 투표</p>
      <ul className="w-full space-y-8">
        {MOCK_VOTE_LIST.map(
          ({
            id,
            title,
            description,
            author,
            max,
            min,
            created_at,
            expires_at
          }) => {
            return (
              <li
                key={id}
                className="space-y-4 rounded-md border-[1px]
border-black/20 p-4 shadow-md"
              >
                {/* title, description */}
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{title}</p>
                  <p className="text-sm text-black/70">{description}</p>
                </div>

                {/* others */}
                <div
                  className="flex items-center gap-6 text-sm text-black/70"
                >
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>
                      {max === 0
                        ? min
                        : `${min} / ${max.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{expires_at}</span>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
